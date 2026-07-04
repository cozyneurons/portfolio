# Ankita Kumari — Personal Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, and **Framer Motion**, showcasing projects, skills, open-source contributions, and providing a way to get in touch.

🔗 **Live at:** [ankita-portfolio.vercel.app](#) &nbsp;|&nbsp; [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ankita-kumari1312/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/AnkitaKumariii)

---

## ✨ Features

- **Animated Hero Section** — Per-letter spring animation for name reveal, with doodle accents
- **About Section** — Parallax scroll effect powered by Framer Motion
- **Skills Section** — Categorised tech stack with devicon icons and an interactive particle background
- **Projects Section** — Featured project cards with tilt effect (vanilla-tilt) and project previews
- **Contributions Section** — Live GitHub API feed showing all forked/open-source repos with stars and language badges
- **Contact Section** — Direct email link + social cards for GitHub and LinkedIn
- **Dark / Light Mode** — System-aware theme with a smooth toggle
- **Custom Cursor** — Unique interactive cursor for desktop
- **Magnetic Buttons** — Framer Motion powered magnetic hover effect on CTAs
- **Fully Responsive** — Mobile-first layout with an animated hamburger menu

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Styling | [Sass (SCSS)](https://sass-lang.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| 3D Tilt Effect | [vanilla-tilt](https://micku7zu.github.io/vanilla-tilt.js/) |
| Linting | [oxlint](https://oxc.rs/docs/guide/usage/linter) |

---

## 📁 Project Structure

```
port/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          ← Drop your resume PDF here
│   ├── labelx_preview.png
│   └── strongape_preview.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contributions.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Magnetic.jsx
│   │   ├── TiltWrapper.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── InteractiveBackground.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   └── styles/
│       └── styles.scss
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/AnkitaKumariii/port.git
cd port

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Customisation

To personalise this portfolio for yourself:

1. **Hero / About / Contact** — Edit the relevant `.jsx` files in `src/components/`
2. **Skills** — Update the `SKILL_CATEGORIES` array in `Skills.jsx`
3. **Projects** — Update the `FeaturedProject` calls in `Projects.jsx` and drop preview images into `public/`
4. **GitHub Contributions** — Change `GITHUB_USERNAME` in `Contributions.jsx`
5. **Resume** — Place your `resume.pdf` inside the `public/` directory
6. **Social Links** — Update the `href` values in `Contact.jsx` and `Navbar.jsx`

---

## 📬 Contact

- **Email:** ankitaa3020@gmail.com
- **LinkedIn:** [linkedin.com/in/ankita-kumari1312](https://www.linkedin.com/in/ankita-kumari1312/)
- **GitHub:** [github.com/AnkitaKumariii](https://github.com/AnkitaKumariii)

---

<p align="center">Designed & Built by <strong>Ankita Kumari</strong></p>
