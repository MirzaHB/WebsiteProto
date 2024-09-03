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

type AboutData = {
  aboutMe: string;
  picturePath: string;
};

export default function About() {
  const data = useLoaderData<AboutData>();
  return (
    <div className="flex items-center h-auto">
      <div className="p-4 m-5 flex items-center">
        <img
          src={data.picturePath}
          alt="Profile pic"
          className="rounded-full object-cover w-[500px] h-[500px]"
        />
        <div className="ml-4 h-[500px] w-[2px] bg-red-100"></div>
      </div>
      <div className="flex-1">
        <h1>Type writer effect</h1>
        <p>Some links in nice buttons or headlessUI component</p>
      </div>
    </div>
  );
}
