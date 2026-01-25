
# Jeraldine's 3D Portfolio

Live: [https://jeraldineportfolio.vercel.app](https://jeraldineportfolio.vercel.app)

This is my interactive 3D portfolio, built with React, Vite, Tailwind CSS, and React Three Fiber. It showcases my projects, skills, and experience in a clean, modern interface. The site is fully responsive and deployed on Vercel.



## Tech Stack

React 18, Vite, Tailwind CSS, Three.js (React Three Fiber & Drei), React Router, EmailJS


## Features

- Interactive 3D models and smooth animations
- Modern, responsive design
- Project GIF stack preview
- Contact form (EmailJS, no backend required)
- Pre-build asset validation for reliability


## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```
2. Copy `.env.example` to `.env` and add your EmailJS credentials:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Start the dev server:
   ```powershell
   npm run dev
   ```
   Open the URL shown in the terminal (usually http://localhost:5173).
4. To build and preview production:
   ```powershell
   npm run build
   npm run preview
   ```


## Environment Variables

Used for the contact form (see `src/pages/Contact.jsx`):
- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

Do not commit secrets. Use `.env.example` as a template.


## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Pre-build asset check, then build for production
- `npm run preview` — Preview the production build
- `npm run check:assets` — Verify all icons exist on disk


## Project Structure

src/
	assets/
		3d/        (3D models)
		icons/     (SVG icons)
		images/    (GIFs, images)
	components/  (UI components)
	hooks/       (Custom hooks)
	models/      (3D model components)
	pages/       (Home, About, Projects, Contact)
	constants/   (Static data)
	main.jsx     (App entry)
	App.jsx      (Root layout)


Other files:
- `vite.config.js` — Vite config
- `vercel.json` — Vercel deployment config
- `scripts/check-assets.js` — Pre-build asset check


## How It Works

- 3D scenes and models rendered with React Three Fiber
- Routing with React Router
- Contact form uses EmailJS (no backend needed)
- Asset check script ensures all icons exist before build


## Deploying

This project is ready for Vercel. Just push to GitHub, link your repo on Vercel, and set the EmailJS environment variables. Build and output settings are auto-detected.


## Troubleshooting

- Asset check fails: Make sure all icons in `src/assets/icons/index.js` exist
- Black screen: Check for missing assets or build errors
- Email not sending: Confirm EmailJS variables are set locally and on Vercel


## Contributing

Open to suggestions and improvements. PRs welcome.


## License

This project is provided as-is. Add a LICENSE file if you plan to distribute.
