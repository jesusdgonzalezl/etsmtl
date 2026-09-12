# Gonzalez Llorente Research Group website

A responsive, Markdown-driven academic website built with Astro and ready for GitHub Pages.

## Editing the site

### Global information and navigation

Edit `src/config/site.json`. This file controls the group name, professor details, contact links, colors, and navigation. Set `enabled` to `false` to hide a section. Reorder the navigation objects to change menu order.

### Section content

Edit files in `src/content/pages/`. Standard Markdown formatting is supported.

To add a simple section:

1. Create `src/content/pages/facilities.md` with the same frontmatter fields as another page.
2. Add `{ "id": "facilities", "label": "Facilities", "enabled": true }` to the navigation array in `src/config/site.json`.
3. The page will be generated automatically at `/facilities/`.

The Research, People, Publications, and News sections use custom layouts. Their IDs should remain unchanged unless the corresponding files in `src/pages/` are also renamed.

### Students

Create one `.md` file per person in `src/content/students/`. Copy `example-student.md`, rename it, and edit its fields. Use `status: alumni` to move someone to the alumni list.

### Publications

Create one `.md` file per publication in `src/content/publications/`. Copy an existing entry and update its structured fields. Set `featured: true` to show an item on the homepage.

### News and activity photos

Create one `.md` file per update in `src/content/news/`. Put activity photos in `public/images/activities/`, then add fields such as:

```yaml
image: /images/activities/conference-2026.jpg
imageAlt: Group members presenting their work at the conference
```

Student portraits belong in `public/images/people/` and are referenced the same way from student Markdown files.

For the professor portrait, place an image in `public/images/people/` and set `principalInvestigator.photo` in `src/config/site.json`, for example `/images/people/professor.jpg`.

## Run locally

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

Open the local address shown in the terminal. Run `npm run build` before publishing.

## Publish with GitHub Pages

1. Create a GitHub repository and upload this project's contents.
2. Use `main` as the default branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push a change to `main`; the included workflow will build and publish the site.

For a user site named `YOUR-USERNAME.github.io`, set `BASE_PATH` to `/` in `.github/workflows/deploy.yml`. For a normal project repository, keep the supplied repository-name path.

## Initial content source

Professor information and selected publication metadata were adapted from the official ÉTS faculty profile. Review all sample and imported content before publication.
