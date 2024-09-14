import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import projectsData from "../server/myData.json";
import { Project } from "app/routes/Projects";
import { slugify } from "../utils/slugify";

export const loader: LoaderFunction = async ({ params }) => {
  const projectName = params.projectName;
  const project = projectsData.Projects.find(
    (proj) => slugify(proj.name) === projectName
  );

  if (!project) {
    throw new Response("Project Not Found", { status: 404 });
  }

  return json(project);
};

export default function ProjectDetail() {
  const project = useLoaderData<Project>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 mb-6"
      >
        View on GitHub
      </a>

      <h2 className="text-2xl font-semibold mb-4">Skills Used</h2>
      <p className="text-gray-800 mb-8">{project.skills}</p>

      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="flex overflow-x-scroll space-x-4 pb-4">
        {project.imageArr.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`${project.name} screenshot ${index + 1}`}
            className="w-64 h-40 sm:w-80 sm:h-52 md:w-96 md:h-60 object-cover flex-shrink-0 rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}
