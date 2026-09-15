# ThePips React Source — Recovered Project

This project was reconstructed from the production `build` ZIP and its source maps.

## Recovered
- Original React application files under `src/` (pages, components, containers, layouts, hooks, helpers)
- Original custom SCSS partials under `src/assets/scss/`
- Public images, videos, documents, favicon, manifest, redirects and .htaccess under `public/`
- CRA-compatible `package.json` and scripts

## Important
The original `package.json` was not present in the Director's build ZIP. Dependency versions in this recovered package.json were reconstructed from the bundle APIs/source-map evidence and compatible package versions. The production bundle confirms React 18.3.1 and Bootstrap 5.3.8.

## Run on Windows / VS Code
```powershell
npm install
npm start
```

Then open http://localhost:3000

## Production build
```powershell
npm run build
```

Do not include `node_modules` when sharing the project.

## Recovery completeness
- 314 JavaScript source modules recovered directly from `main.*.js.map`.
- 42 custom SCSS partials recovered from `main.*.css.map`.
- 24 JSON data modules recovered exactly from the production JavaScript bundle.
- 9 imported but unused modules were tree-shaken from the production build; placeholder components are clearly labelled `Recovery placeholder`.
- All active relative/local imports resolve in this recovered source tree.

The production ZIP did **not** contain the original package.json/package-lock.json, Git history, environment files, or unbundled code that was removed by tree shaking. Those cannot be recovered exactly from the build alone.
