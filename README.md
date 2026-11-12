# Shawn Preston’s geospatial portfolio

An Astro static site featuring GIS applications, reproducible mapping workflows and climate research. Three.js adds a pointer-responsive treatment to the NEXUS project image. A static image is available on touch devices, with reduced motion, or without WebGL.

Use Node 22.19 or newer. Run `npm ci`, then `npm run dev` for local development. Run `npm run build` to generate `dist/`, or `npm run preview` to check the production build.

Project descriptions live in `src/projects.js`. The original full-resolution figures and reports are in `public/assets/`. Display previews are in `public/media/`.

GitHub Actions builds and publishes the site when main changes. GitHub Pages uses the GitHub Actions publishing source.
