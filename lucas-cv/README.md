# Lucas Gutiérrez Prada — Online CV

A production-grade **React + Vite + Tailwind CSS** Single Page Application (SPA) to showcase the online CV and portfolio of **Lucas Gutiérrez Prada**, Senior WMS Project Lead & Full Stack Developer.

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Deployment | GitHub Pages via `gh-pages` |

---

## 📁 Project Structure

```
lucas-cv/
├── public/                   # Static assets (favicon, og-image)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed top navigation
│   │   ├── Hero.jsx          # Full-screen hero with SVG warehouse
│   │   ├── Summary.jsx       # Professional summary + stats
│   │   ├── Skills.jsx        # Skill groups grid
│   │   ├── Experience.jsx    # Interactive job timeline
│   │   ├── Education.jsx     # Education + Languages + Availability
│   │   ├── WMSGame.jsx       # ★ Interactive WMS Simulator
│   │   └── Footer.jsx
│   ├── App.jsx               # Root layout
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind directives + custom CSS
├── index.html
├── vite.config.js            # base: '/lucas-cv/'
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites

- **Node.js** v18 or higher ([nodejs.org](https://nodejs.org))
- **npm** v9+ (comes with Node.js)
- **Git** installed and configured

### Steps

```bash
# 1. Clone your repository
git clone https://github.com/<YOUR_USERNAME>/lucas-cv.git
cd lucas-cv

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser. The page hot-reloads on every save.

---

## ☁️ Deploy to GitHub Pages

Follow these steps exactly — they cover every detail including the Vite `base` path required by GitHub Pages.

### Step 1 — Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name the repository exactly **`lucas-cv`** (must match `base` in `vite.config.js`)
3. Set visibility to **Public**
4. Do **not** initialise with README or .gitignore (you already have them)
5. Click **Create repository**

### Step 2 — Link your local project to GitHub

```bash
# Inside the lucas-cv folder
git init
git add .
git commit -m "feat: initial CV SPA"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/lucas-cv.git
git push -u origin main
```

Replace `<YOUR_USERNAME>` with your actual GitHub username.

### Step 3 — Verify the Vite base path

Open `vite.config.js` and confirm:

```js
export default defineConfig({
  plugins: [react()],
  base: '/lucas-cv/',   // ← must match your repo name exactly
})
```

If your repository is named differently, update `base` to `'/YOUR-REPO-NAME/'`.

### Step 4 — Install the deployment tool (already in package.json)

```bash
npm install   # gh-pages is already listed as a devDependency
```

### Step 5 — Add your GitHub username to package.json

Open `package.json` and confirm the `homepage` field. If it is missing, add it:

```json
{
  "homepage": "https://<YOUR_USERNAME>.github.io/lucas-cv",
  ...
}
```

### Step 6 — Build and deploy

```bash
npm run deploy
```

This command will:
1. Run `npm run build` → generates `dist/`
2. Push `dist/` to a new branch called `gh-pages` automatically

### Step 7 — Enable GitHub Pages in repository settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **`gh-pages`** and folder **`/ (root)`**
5. Click **Save**

### Step 8 — Access your live site

After 1–2 minutes, your CV will be live at:

```
https://<YOUR_USERNAME>.github.io/lucas-cv/
```

---

## 🔄 Updating the site

Every time you make changes:

```bash
git add .
git commit -m "update: <describe what changed>"
git push origin main      # update source code
npm run deploy            # rebuild and push to GitHub Pages
```

---

## 🎮 WMS Simulator — How it works

The **WMSGame** component (`src/components/WMSGame.jsx`) is a fully custom interactive experience:

| Element | Technology |
|---|---|
| Warehouse top-down view | Pure SVG (no external images) |
| Forklift + forks | SVG shapes animated by Framer Motion |
| Hand pointer tap effect | CSS keyframes via Framer Motion |
| Forklift movement | `motion.g` with spring physics |
| Modal message | Framer Motion `AnimatePresence` |
| Tablet UI | CSS + React state machine |

### State machine phases

```
idle → moving → done → resetting → idle
```

---

## 🔧 Customisation

### Change the photo

Replace the `<img>` in `Hero.jsx` with your actual photo:

```jsx
<img
  src="/lucas-cv/photo.jpg"   // place photo.jpg in /public/
  alt="Lucas Gutiérrez Prada"
  className="w-full h-full object-cover"
/>
```

### Change the repository name

If your GitHub repo is **not** named `lucas-cv`, update two places:

```js
// vite.config.js
base: '/YOUR-REPO-NAME/',

// package.json
"homepage": "https://<USER>.github.io/YOUR-REPO-NAME"
```

---

## 📄 License

Personal portfolio — all rights reserved by Lucas Gutiérrez Prada.
