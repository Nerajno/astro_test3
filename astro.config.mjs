import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './remark-reading-time.mjs';
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  site: "https://radiant-sprinkles-d2960e.netlify.app",
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    domains: ["picsum.photos"],
    service: { entrypoint: "astro/assets/services/sharp" },
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.amazonaws.com',
    },
    {
      protocol: 'https',
      hostname: '**.giphy.com',
    },
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: '**.dev.to',
    },
    {
      protocol: 'https',
      hostname: '**.pexels.com',
    }
  ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
