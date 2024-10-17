const { mdx } = require("@remix-run/mdx");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = mdx({
  appDirectory: "app",
  serverBuildPath: "build/index.js",
  publicPath: "/WebsiteProto/build/",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],

  // Add .mdx to the list of app file extensions
  appFileExtensions: ["js", "jsx", "ts", "tsx", "mdx"],

  // Configure MDX processing
  mdx: async () => {
    const [rehypeHighlight, remarkFrontmatter, remarkMdxFrontmatter] =
      await Promise.all([
        import("rehype-highlight").then((mod) => mod.default),
        import("remark-frontmatter").then((mod) => mod.default),
        import("remark-mdx-frontmatter").then((mod) => mod.default),
      ]);
    return {
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight],
    };
  },
});
