# Gabriel Llacuna — React portfolio

This is a portfolio built with React, plain CSS, and Vite. It does not need a UI framework or extra component library. The Projects section is waiting for your first completed project.

## Learn it in small steps

1. **Run the site.** In Windows PowerShell, run `npm.cmd run dev` from this folder. Vite serves the page locally and refreshes it when you save a file. (`npm.cmd` avoids a PowerShell script-policy issue on this computer.)
2. **Read the page outline.** In `src/App.jsx`, each imported component becomes one piece of the page. `Header`, `Hero`, `About`, `Certificates`, `Projects`, `Contact`, and `Footer` are kept in `src/components/` so you can learn and edit one section at a time.
3. **Personalize the introduction.** Start in `src/components/Hero.jsx`. Edit the introduction and short description. JSX looks like HTML, with JavaScript expressions inside `{}`.
4. **Add your story and skills.** Edit `src/components/About.jsx`. The skills are kept in an array and displayed with `.map()`, which is a common React pattern for repeating content.
5. **Review your certificates.** Certificate titles, providers, and links are listed in `src/components/Certificates.jsx`.
6. **Add projects later.** The Projects section currently says “coming soon.” When you have finished a real project, add its title, description, tools, and link in `src/components/Projects.jsx`.
7. **Update your contact details.** Your email and GitHub profile link are in `src/components/Contact.jsx`.
8. **Change the look.** All portfolio styles are in `src/components/portfolio.css`. Try changing the color values near the top first. The `@media` rules near the bottom adjust the layout for small screens.
9. **Build a publishable copy.** Run `npm.cmd run build`. Vite puts the static site in `dist/`; you do not edit that generated folder.

## Publish to GitHub Pages

The Vite `base` setting is already `/portfolio2026/`, and `.github/workflows/deploy.yml` builds and publishes the site whenever you push to `main`.

1. On GitHub, open **llacuna750/portfolio2026** → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. After editing your portfolio and saving your work, commit and push the changes:

   ```sh
   git add src/components src/App.jsx src/index.css vite.config.js index.html .github/workflows/deploy.yml README.md
   git commit -m "Build my React portfolio"
   git push origin main
   ```

4. In the repository's **Actions** tab, open the deploy workflow and wait for it to finish. The site should appear at `https://llacuna750.github.io/portfolio2026/`.

The first push starts the workflow; later pushes to `main` publish updates automatically. GitHub Pages must be enabled in repository settings, and you need permission to change that setting.
