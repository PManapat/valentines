
# Valentines App

Minimal React + TypeScript page that asks "Will you be my Valentine?" with a clickable `Yes` and an evasive `No` button.

Run locally:

```bash
npm install
npm run dev
```

Host on GitHub Pages (recommended via GitHub Actions)
--------------------------------------------------

1) Create a GitHub repository and push your code (replace `YOUR-USERNAME` and `REPO`):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:YOUR-USERNAME/REPO.git
git push -u origin main
```

2) (Optional) If you plan to host as a project page at `https://YOUR-USERNAME.github.io/REPO/`, set the Vite `base` option in `vite.config.ts` to `'/REPO/'` so asset paths resolve correctly. If you will host at a user/organization site (`https://YOUR-USERNAME.github.io/`), leave `base` as `'/'.`

3) This repository already includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the app and deploys the `dist` folder to GitHub Pages automatically whenever you push to `main` or `master`.

4) After pushing the branch, open your repository on GitHub, go to the **Pages** page in the Settings (or the repository's Actions tab to watch the workflow). The site will be published automatically when the workflow completes.

Build locally to verify:

```bash
npm run build
```

Notes
- The workflow uses the official Pages actions to upload the `dist` build and deploy.
- If your site appears broken (404 assets), check `vite.config.ts` `base` setting and update it for project pages.

