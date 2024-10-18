# Openslava 2024 - Build a fully-typed full-stack app with Remix
This showcase repository is a creation of a Hands-on lab led by Accenture guys [Pavel Struhar](https://github.com/pavestru) and [Jan Capiak](https://github.com/jan-capiak) during [Openslava 2024](https://www.openslava.sk/2024/#/) conference.

## Abstract
You will use the TypeScript language and the Remix framework to build a small but complete web application, including the front-end, back-end, database, and authentication. You will host it for free on Cloudflare. We will show you how TypeScript can simplify the job while avoiding some of its pitfalls. The basis for the project will be provided, so you will only be required to fill in the missing parts. We will guide you step-by-step, but previous experience with JavaScript is a must.

## Technologies used
- [Remix](https://remix.run/)
- [Cloudflare](https://www.cloudflare.com/)
- [Supabase](https://supabase.com/)

## Useful links
- [Openslava 2024 lab page](https://www.openslava.sk/2024/#/program/75fd213b-d33e-4c2f-bf63-d91d40454ea8)
- [Lab presentation](https://pavestru.github.io/remix-workshop/)
- [Forked example project with assignments and hints](https://github.com/Kuchto47/openslava24-remix-workshop-app-example)

# Welcome to Remix + Cloudflare!

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## Development

Run the dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
