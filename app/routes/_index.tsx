import { json, LoaderFunction } from "@remix-run/node";
import fs from "fs";
import path from "path";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const filePath = path.resolve("app/server/myData.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return json(data);
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div className="font-sans p-4">
      <h1> Data fromJSON file:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
