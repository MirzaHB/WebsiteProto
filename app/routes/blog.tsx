import { Outlet } from "@remix-run/react";

export default function BlogLayout() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <article className="prose lg:prose-2xl">
        <Outlet />
      </article>
    </div>
  );
}
