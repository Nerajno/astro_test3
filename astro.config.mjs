// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";
// import { remarkReadingTime } from './remark-reading-time.mjs';
// import vercel from "@astrojs/vercel/serverless";

// // Conditionally import the Vercel adapter
// let vercelAdapter;
// if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
//   vercelAdapter = () => import('@astrojs/vercel/serverless');
// }

// // https://astro.build/config
// export default defineConfig({
//   site: "https://astro-portfolio-v3-dusky.vercel.app",
//   output: "hybrid",
//   // adapter: process.env.NODE_ENV === 'production' ? vercelAdapter() : undefined,
//   adapter: vercel(),
//   integrations: [tailwind(), mdx(), sitemap()],
//   image: {
//     domains: ["picsum.photos"],
//   },
//   markdown: {
//     remarkPlugins: [remarkReadingTime],
//   },
// });

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './remark-reading-time.mjs';

const OUTPUT_MODES = {
  STATIC: 'static',
  HYBRID: 'hybrid',
  SERVER: 'server'
};

const outputMode = process.env.ASTRO_OUTPUT_MODE || OUTPUT_MODES.STATIC;
if (!Object.values(OUTPUT_MODES).includes(outputMode)) {
  console.warn(`Invalid output mode "${outputMode}". Falling back to hybrid mode.`);
}

let vercelAdapter;
if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  vercelAdapter = async () => {
    const vercel = await import('@astrojs/vercel/serverless');
    return vercel.default();
  };
}

export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: outputMode,
  adapter: vercelAdapter ? await vercelAdapter() : undefined,
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
