# ABISHA.POD — React + Tailwind Portfolio

A Y2K futuristic iPod-themed developer portfolio.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder can be deployed to Vercel, Netlify, GitHub Pages, etc.

## 🖼️ Adding Your Avatar

Replace the placeholder by placing your photo at:

```
src/assets/avatar.jpg
```

Then update the import in these two files:
- `src/components/PodScreens.jsx` — change the import to:
  ```js
  import avatarUrl from '../assets/avatar.jpg'
  const avatarUrl = avatarUrl
  ```
- `src/components/FullPage.jsx` — same change

## 🎨 Customisation

| File | What to change |
|------|---------------|
| `src/components/PodScreens.jsx` | Menu items, About bio, Skills, Projects, Contact info |
| `src/components/FullPage.jsx` | Full-screen section content |
| `src/index.css` | CSS variables (colours) |
| `tailwind.config.js` | Tailwind colour tokens & animations |

### Colour tokens (in `src/index.css` `:root`)
| Token | Default | Meaning |
|-------|---------|---------|
| `--acc` | `#a855f7` | Primary accent (purple) |
| `--acc2` | `#c084fc` | Secondary accent (soft purple) |
| `--mint` | `#70d6c7` | Teal highlight |
| `--coral` | `#ff7a6b` | Warm accent |
| `--gold` | `#ffd166` | Yellow accent |

## 📁 Project Structure

```
src/
├── App.jsx               # Root — state, warp transitions, theme
├── main.jsx              # React entry
├── index.css             # Global CSS + CSS vars
├── assets/
│   └── avatar.js         # Placeholder avatar (replace with avatar.jpg)
└── components/
    ├── WarpCanvas.jsx    # Star-warp transition canvas (imperative)
    ├── Y2kBg.jsx         # Spinning CDs, cables, EQ bars, pixel overlay
    ├── ThemeToggle.jsx   # Side-mounted dark/light toggle
    ├── IntroScreen.jsx   # Typing-effect landing screen
    ├── IPod.jsx          # iPod shell + click wheel
    ├── PodScreens.jsx    # All pod-screen views (menu, about, skills…)
    └── FullPage.jsx      # Full-screen expanded section view
```

## 🌐 Deploy to Vercel (one command)

```bash
npm i -g vercel
vercel --prod
```

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to app.netlify.com/drop
```

## 🌐 Deploy to GitHub Pages

Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```
Then push `dist/` to the `gh-pages` branch.
