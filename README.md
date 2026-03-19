# CCA regulations viewer

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-EF0082?style=flat-square&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

a minimalistic, glassmorph-ui-designed app for fellow hl2rp roblox larpers! features regulations and terminology.


## Project Structure

```
src/
├── components/
│   ├── data/
│   │   └── arrays.js        # data arrays, to be used with components
│   ├── Rules.jsx             # regulations
│   ├── Codes.jsx             # terminology
│   └── Both.jsx              # Side-by-side layout wrapper
└── App.jsx                   # Root — mode switcher (Rules / Codes / Both)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

> Requires **Node.js 18+**
