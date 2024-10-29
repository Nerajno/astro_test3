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
import vercel from "@astrojs/vercel/serverless";

// Define possible output modes
const OUTPUT_MODES = {
  STATIC: 'static',
  HYBRID: 'hybrid',
  SERVER: 'server'
};

// Get output mode from environment variable or fall back to hybrid
const outputMode = process.env.ASTRO_OUTPUT_MODE ?? OUTPUT_MODES.HYBRID;

// Conditionally import the Vercel adapter
let vercelAdapter;
if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  vercelAdapter = () => import('@astrojs/vercel/serverless');
}

// Validate output mode
const isValidOutputMode = Object.values(OUTPUT_MODES).includes(outputMode);
if (!isValidOutputMode) {
  console.warn(`Invalid output mode "${outputMode}". Falling back to hybrid mode.`);
}

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: isValidOutputMode ? outputMode : OUTPUT_MODES.HYBRID,
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
