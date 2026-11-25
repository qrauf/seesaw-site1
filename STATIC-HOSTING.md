# Seesaw static website

The production website is a static site. It runs in the visitor's browser and
does not need Node.js, Express, a database, or an API server on the host.
React is used to author the website; the build produces ordinary HTML, CSS,
JavaScript, and image files.

## Build from source

Node.js and pnpm are needed only on the machine building the files:

```sh
pnpm install --frozen-lockfile
pnpm build:static
```

The website files are generated in:

```text
artifacts/seesaw-productions/dist/public/
```

Upload **the contents** of that folder to your static host's document root
(for example, `public_html`). Do not upload `node_modules` or start a Node server.
The downloadable static ZIP contains these ready-to-upload files.

If the hosting provider builds from GitHub, use `pnpm build:static` as the build
command and `artifacts/seesaw-productions/dist/public` as the publish directory.

The default build targets the domain root. For hosting inside a subfolder, set
`BASE_PATH` to the subfolder path, including a trailing slash, when building.
For example, `BASE_PATH=/seesaw-site1/ pnpm build:static`.

## Features

- Images, animations, navigation, and the work grid run entirely in the browser.
- The enquiry form opens the visitor's email app with a prepared message; it does
  not send or store messages on a server.
- Vimeo thumbnails, maps, social links, and web fonts still need internet access.
- Serve the files over HTTP or HTTPS rather than double-clicking `index.html`.

The development preview can still use Vite. That does not create a Node.js
requirement for the hosted static website.
