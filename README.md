# Personal CV Portfolio

Personal CV and developer portfolio of **Renelyn Cuesta**, a fourth-year BSIT student at Davao Del Norte State College.

- **GitHub repository:** https://github.com/cuesta1212/CV-RenelynCuesta-Portfolio
- **Live site (Vercel):** _add link after deploying_

## Technologies
React 18, Vite 5, Tailwind CSS 4, Framer Motion, Lucide React.

## Features
Responsive layout, light and dark themes (saved and system-aware), animated mobile menu, scroll progress bar, active-section nav highlighting, skill category tabs, education timeline, project cards, copy-email button, reduced-motion support.

## Folder structure
```
public/                 favicon, images, resume.pdf (add yours)
src/components/         Navbar, Footer, Reveal, ThemeToggle, SocialLinks, ...
src/sections/           Hero, About, Education, Skills, Projects, GitHub, ...
src/data/portfolio.js   ALL your content lives here
src/hooks/              useTheme, useActiveSection
```

## Run locally
```bash
npm install
npm run dev        # development server
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Update your content
Edit `src/data/portfolio.js`. Profile photos, project screenshots, and certificates are stored in `public/images/`. Add your CV at `public/resume.pdf`, then set `cvFile: "/resume.pdf"`.

## Deploy to Vercel
Push to GitHub, then import the repo at vercel.com. Vercel detects Vite automatically: Build Command `npm run build`, Output Directory `dist`, Install Command `npm install`.

## Author
Renelyn Cuesta, renelyncuesta5@gmail.com, https://github.com/cuesta1212
