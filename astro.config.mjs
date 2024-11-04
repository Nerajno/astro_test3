import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node';
import { remarkReadingTime } from './remark-reading-time.mjs';

const OUTPUT_MODES = {
  STATIC: 'static',
  HYBRID: 'hybrid',
  SERVER: 'server'
};

const outputMode = process.env.ASTRO_OUTPUT_MODE || OUTPUT_MODES.SERVER;
if (!Object.values(OUTPUT_MODES).includes(outputMode)) {
  console.warn(`Invalid output mode "${outputMode}". Falling back to server mode.`);
}

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: outputMode,
  adapter: isVercel ? vercel() : node({
    mode: "standalone"
  }),
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});


