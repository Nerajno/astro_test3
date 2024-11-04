import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import node from '@astrojs/node';
import { remarkReadingTime } from './remark-reading-time.mjs';

export default defineConfig({
  site: "https://astro-portfolio-v3-dusky.vercel.app",
  output: 'server',
  adapter: node({
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


