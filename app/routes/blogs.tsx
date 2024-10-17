import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const loader: LoaderFunction = async () => {
  try {
    const routesPath = path.join(process.cwd(), "app", "routes");
    const files = fs.readdirSync(routesPath);

    // Filter files that match 'blog.*.mdx'
    const mdxFiles = files.filter(
      (file) => file.startsWith("blog.") && file.endsWith(".mdx")
    );

    // Extract metadata from MDX files
    const posts = mdxFiles.map((file) => {
      const fileName = path.parse(file).name; // e.g., 'blog.firstPost'
      const slug = fileName.split(".")[1]; // Extract 'firstPost'

      const filePath = path.join(routesPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        thumbnail: data.thumbnail || "",
      };
    });

    // Sort posts by date (optional)
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return posts;
  } catch (error) {
    console.error("Error in loader function:", error);
    throw new Response("Error loading posts", { status: 500 });
  }
};

export default function BlogIndex() {
  const posts = useLoaderData<
    {
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      thumbnail: string;
    }[]
  >();

  if (!posts || posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold my-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
