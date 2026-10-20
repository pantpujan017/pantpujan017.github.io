# pantpujan017.github.io

Personal website of Pujan Pant. Plain HTML and CSS with a few lines of JavaScript, with no build step, so GitHub Pages serves it as is.

Live at **https://pantpujan017.github.io**

## What's in this folder

| Path | What it is |
|---|---|
| `index.html` | The page: name, headline, top bar |
| `css/style.css` | Design: colours and fonts are set once at the top under `:root` |
| `js/map.js` | The interactive network map: all its nodes and links are listed at the top of this file |
| `js/main.js` | Header divider on scroll, footer year |
| `assets/pujan.jpg` | Your photo (portrait, 4:5) |
| `assets/Pujan-Pant-CV.pdf` | CV behind the "Download CV" button |
| `fonts/` | Source Serif 4 and Hanken Grotesk (free, SIL Open Font License) |
| `favicon.svg` | The browser-tab icon (a tiny calibration chart) |
| `.nojekyll` | Tells GitHub Pages to serve files as they are (hidden on Mac; harmless if it gets left out) |

---

## Put it live: first time (about 10 minutes)

### Option A: GitHub website only (no Git needed)

1. Sign in at **github.com** as `pantpujan017`.
2. Click **+** (top right) → **New repository**.
3. Repository name: **`pantpujan017.github.io`**. It must be exactly this, all lowercase.
   Set it to **Public**. Leave "Add a README" **unticked**. Click **Create repository**.
4. On the empty repository page, click the link **"uploading an existing file"**.
5. On your PC, open the unzipped `pantpujan017.github.io` folder. Select **everything inside it**
   (`index.html`, `css`, `js`, `fonts`, `assets`, `favicon.svg`, `README.md`) and drag it all into the browser.
   Upload the *contents*, not the outer folder itself, so `index.html` sits at the top level of the repository.
6. Scroll down and click **Commit changes**.
7. Go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**. (It's often already set for `username.github.io` repositories.)
8. Wait 1–2 minutes, then open **https://pantpujan017.github.io**.
   The **Actions** tab shows a green tick when it's published.

### Option B: Git from the command line

```bash
cd pantpujan017.github.io
git init
git add .
git commit -m "First version of personal site"
git branch -M main
git remote add origin https://github.com/pantpujan017/pantpujan017.github.io.git
git push -u origin main
```

Create the empty repository on github.com first (steps 1–3 above). When Git asks you to sign in,
use the browser sign-in or a personal access token; your normal GitHub password won't work on the
command line. Then do step 7.

---

## Making changes later

- **Add something to the map:** open `js/map.js`. Add a line to `NODES` (copy an existing one and change the words),
  then link it in `EDGES`, for example `["pujan", "newid"]`. The type (`research`, `experience`, `project`,
  `education`, `theme`, `interest`) decides its shape.

- **Edit text:** almost all the words live in `js/map.js` (the map and its panel). Open it on github.com → pencil icon →
  change the words → **Commit changes**. The live site updates within a minute or two. Your name and headline are in `index.html`.
- **New photo:** upload a portrait named exactly `pujan.jpg` into the `assets` folder (Add file → Upload files).
  It replaces the old one. A roughly 4:5 portrait, at least 600 px wide, works best.
- **New CV:** upload it as `assets/Pujan-Pant-CV.pdf` (same name) to replace the old one.
- **Change the accent colour:** in `css/style.css`, edit `--cobalt` under `:root`.

## Previewing on your PC

Double-click `index.html` to open it in a browser. Fonts may fall back to standard ones when opened this way.
That's a browser rule for local files, and they load properly once the site is live. For an exact preview, run
`python -m http.server` inside the folder and open http://localhost:8000.
