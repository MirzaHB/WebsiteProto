import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypeHighlight from "rehype-highlight";

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight],
      providerImportSource: "@mdx-js/react",
    }),
    remix({
      ssr: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"],
  },
});
