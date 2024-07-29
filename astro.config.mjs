import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  site: process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://www.json-wf.org.uk",
  integrations: [mdx({
    syntaxHighlight: false,
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, {
      theme: "github-dark"
    }]]
  }), sitemap(), tailwind()]
});
