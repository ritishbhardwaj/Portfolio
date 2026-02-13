import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const args = process.argv.slice(2);
const getArg = (flag, fallback) => {
  const index = args.indexOf(flag);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const host = getArg('--host', '127.0.0.1');
const port = Number(getArg('--port', '4173'));
const root = process.cwd();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

const sseClients = new Set();

function walkFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out;
}

function getSnapshot() {
  const map = new Map();
  for (const file of walkFiles(root)) {
    try {
      const stat = fs.statSync(file);
      map.set(file, stat.mtimeMs);
    } catch {
      // ignore transient files
    }
  }
  return map;
}

let previousSnapshot = getSnapshot();
setInterval(() => {
  const next = getSnapshot();
  let changed = false;

  if (next.size !== previousSnapshot.size) changed = true;
  if (!changed) {
    for (const [file, mtime] of next) {
      if (previousSnapshot.get(file) !== mtime) {
        changed = true;
        break;
      }
    }
  }

  if (changed) {
    previousSnapshot = next;
    for (const client of sseClients) {
      client.write(`data: reload\n\n`);
    }
    console.log('[debug] change detected -> reloading connected browsers');
  }
}, 500);

function injectLiveReload(html) {
  const snippet = `\n<script>\n  const source = new EventSource('/__events');\n  source.onmessage = (event) => {\n    if (event.data === 'reload') window.location.reload();\n  };\n  source.onerror = () => console.warn('Live reload disconnected. Refresh manually if needed.');\n</script>\n`;
  return html.replace('</body>', `${snippet}</body>`);
}

function safePath(pathname) {
  const clean = pathname === '/' ? '/index.html' : pathname;
  const resolved = path.normalize(path.join(root, clean));
  return resolved.startsWith(root) ? resolved : null;
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/__events') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });
    res.write('retry: 400\n\n');
    sseClients.add(res);
    req.on('close', () => sseClients.delete(res));
    return;
  }

  const filePath = safePath(pathname);
  if (!filePath) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (path.extname(filePath) === '') {
        const fallback = path.join(root, 'index.html');
        fs.readFile(fallback, (fallbackError, fallbackData) => {
          if (fallbackError) {
            res.writeHead(404);
            res.end('Not found');
            return;
          }
          const html = injectLiveReload(fallbackData.toString('utf8'));
          res.writeHead(200, { 'Content-Type': MIME['.html'] });
          res.end(html);
        });
        return;
      }
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath);
    if (ext === '.html') {
      const html = injectLiveReload(data.toString('utf8'));
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(html);
      return;
    }

    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Portfolio dev server running at http://${host}:${port}`);
  console.log('Debug mode ON: live reload enabled.');
});
