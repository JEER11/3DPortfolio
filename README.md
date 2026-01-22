# 3D Portfolio Website

Live: [https://jeraldineportfolio.vercel.app](https://jeraldineportfolio.vercel.app)

An interactive 3D portfolio built with React, Vite, Tailwind CSS, and React Three Fiber. Deployed on Vercel with a simple, reliable build pipeline and pre-build asset checks.

![screenshot](https://github.com/user-attachments/assets/7f0e9a73-5895-44e9-a189-eecd71d882e6)


## Tech stack

- React 18 + Vite
- Tailwind CSS
- Three.js via React Three Fiber and Drei
- React Router
- EmailJS for the contact form

## Features

- 3D models and animations rendered in WebGL (glTF/GLB models)
- Smooth navigation between sections (Home, About, Projects, Contact)
- Contact form that sends emails via EmailJS
- Pre-build asset validation to prevent missing-file deploys

## Getting started

Prerequisites:
- Node.js 18+ recommended
- npm 8+

Setup:
1. Install dependencies
	 - Windows PowerShell
		 ```powershell
		 npm install
		 ```
2. Configure environment variables (for the contact form)
	 - Copy `.env.example` to `.env` and fill in the values from your EmailJS account:
		 ```env
		 VITE_APP_EMAILJS_SERVICE_ID=your_service_id
		 VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
		 VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
		 ```
3. Start the dev server
	 - Windows PowerShell
		 ```powershell
		 npm run dev
		 ```
	 - Open the URL shown in the terminal (usually http://localhost:5173).

Build and preview locally:
- Build:
	```powershell
	npm run build
	```
- Preview the production build:
	```powershell
	npm run preview
	```

## Environment variables (EmailJS)

These are consumed in `src/pages/Contact.jsx`:
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

Notes:
- Do not commit secrets. `.env` is ignored by git; use `.env.example` as a template.
- Consider updating `to_name` and `to_email` in `src/pages/Contact.jsx` to your own values or handle them in the EmailJS template.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — run a pre-build asset check, then build for production
- `npm run preview` — preview the production build locally
- `npm run check:assets` — verifies that all icons imported in `src/assets/icons/index.js` exist on disk

## Project structure (high level)

```
src/
	assets/
		3d/               # GLB models (e.g., cloud_station.glb, sleeping_cat.glb)
		icons/            # SVG icons; imports listed in assets/icons/index.js
		images/           # Image assets
	components/         # Reusable UI components
	hooks/              # Custom hooks
	models/             # 3D model components (Three/Fiber)
	pages/              # Route-level pages (Home, About, Projects, Contact)
	constants/          # Static data (skills, projects, links)
	main.jsx            # App entry
	App.jsx             # Root layout
```

Other notable files:
- `vite.config.js` — Vite config; includes `assetsInclude` for `*.glb`
- `vercel.json` — Vercel config for build/output and SPA rewrites
- `scripts/check-assets.js` — Pre-build script that fails fast if an icon import is missing

## How it works (quick tour)

- 3D scene: Built with React Three Fiber and Drei. GLB models are loaded via standard loaders and rendered in the `Canvas`.
- Routing: `react-router-dom` switches between pages.
- Contact form: Uses EmailJS to send messages without a custom backend. Credentials are provided via Vite env variables.
- Asset guardrail: During `npm run build`, `scripts/check-assets.js` scans `src/assets/icons/index.js` and verifies the imported files exist. If not, build fails with a clear error.

## Deploying to Vercel

This repo includes `vercel.json` to simplify deploys:
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- SPA rewrites to `/` so client-side routing works

Steps:
1. Push to GitHub
2. Create a Vercel project and link the repo
3. Root directory: repository root (`/`)
4. Build command: `npm run build` (auto-detected)
5. Output directory: `dist` (auto-detected)
6. Add the three EmailJS env vars in Vercel Project Settings → Environment Variables

## Troubleshooting

- Build fails with asset-check error
	- Ensure every import in `src/assets/icons/index.js` points to a file that exists under `src/assets/icons/`.
	- Add missing files or fix the import paths, then re-run `npm run build`.

- Black screen after deploy
	- Check the browser console for missing asset errors.
	- Verify Vercel project uses the repo root and outputs `dist`.
	- Confirm the pre-build asset check passes locally.

- Large bundle or slow load
	- Consider lazy-loading heavy models/audio, compressing GLB/MP3 assets, and splitting code via dynamic `import()`.
	- Vite warnings about chunk size are informational; optimizations can be added as needed.

- Email not sending
	- Verify the three EmailJS variables are set in `.env` (locally) and in Vercel (production).
	- Ensure your EmailJS template expects `from_name`, `from_email`, and `message`.
	- Configure allowed origins in EmailJS if required.

## Contributing

Feel free to open issues or PRs for improvements and new features.

## License

This project is provided as-is; add a LICENSE file to specify terms if you plan to distribute.
