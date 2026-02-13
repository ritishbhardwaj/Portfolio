# Portfolio Frontend (React)

A frontend-only React portfolio that runs without installing npm packages.

## Run locally (debug mode + live reload)

```bash
npm run dev
```

This starts a local dev server with **debug mode ON** and automatic page reload whenever files change.

## Host so others can open it

```bash
npm run dev:host
```

This binds to `0.0.0.0:4173`, so you can open it from forwarded ports / remote browser sessions.

## Customize content

- Update your headline and intro in `src/components/Header.js`.
- Update sections and projects in `src/App.js`.
- Update colors and layout in `src/styles.css`.
