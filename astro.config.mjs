import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

