import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from "fs";
import path from "path";

export const loader = async () => {
  const jsonData = JSON.parse(
    fs.readFileSync(path.resolve("app/server/aboutMe.json"), "utf-8")
  );
  return json(jsonData);
};

export default function About() {
  const data = useLoaderData();
  return (
    <>
      <h1>Data in nested rout:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
