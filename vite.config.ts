import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/WebsiteProto/",
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
    }),
    remix({
      basename: "/WebsiteProto/",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".md", ".mdx"],
  },
});
