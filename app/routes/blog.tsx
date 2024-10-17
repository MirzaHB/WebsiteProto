import { Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="prose lg:prose-xl">
        <Outlet />
      </article>
    </div>
  );
}
