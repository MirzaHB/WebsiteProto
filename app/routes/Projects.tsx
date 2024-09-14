import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import projectsData from "../server/myData.json";
import { slugify } from "../utils/slugify";

export interface Project {
  name: string;
  image: string;
  imageArr: string[];
  link: string;
  skills: string;
  description: string;
}

export interface ProjectsData {
  Projects: Project[];
}

export const loader: LoaderFunction = async () => {
  const data = projectsData as ProjectsData;
  return json(data);
};

export default function Projects() {
  const data = useLoaderData<ProjectsData>();
  const projects = data.Projects;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            to={`/projects/${slugify(project.name)}`}
            key={index}
            className="block bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transform transition duration-200"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
