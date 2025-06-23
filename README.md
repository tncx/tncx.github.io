# Çankaya Uydu Servisi Website

This repository contains the source and generated files for **cankayauydu.com**.  The site is served via GitHub Pages and is built from Pug templates and SCSS stylesheets.

## Directory layout

- `sources/` – unprocessed sources
  - `pug/` – Pug templates
  - `scss/` – SCSS stylesheets
- `css/` – compiled CSS (`bootstrap.css`, `fonts.css`, `style.css`)
- `js/` – JavaScript assets
- `images/` – site images and icons
- `fonts/` – webfont files
- `bat/` – PHP helpers used for forms and search
- `*.html` – compiled HTML pages
- `CNAME` and `.nojekyll` – GitHub Pages configuration

## Building from sources

If you wish to regenerate the HTML and CSS, install [Node.js](https://nodejs.org/) and the CLI tools used to compile the sources:

```bash
npm install -g pug-cli sass
```

Then run the following commands from the repository root:

```bash
# Compile templates to HTML
pug sources/pug/pages --pretty --out .

# Build CSS files
sass sources/scss/bootstrap/bootstrap.scss css/bootstrap.css
sass sources/scss/fonts/fonts.scss css/fonts.css
sass sources/scss/custom/style.scss css/style.css
```

These commands will overwrite the existing HTML and CSS with versions generated from the Pug and SCSS source files.
