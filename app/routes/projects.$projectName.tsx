import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import projectsData from "../server/myData.json";
import type { Project } from "../routes/Projects";
import { slugify } from "../utils/slugify";
import { useRef, useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

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
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const checkScroll = () => {
      if (galleryElement) {
        const { scrollWidth, clientWidth, scrollLeft } = galleryElement;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkScroll(); 

    galleryElement?.addEventListener("scroll", checkScroll);

    return () => {
      galleryElement?.removeEventListener("scroll", checkScroll);
    };
  }, [project.imageArr]);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

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
      <div className="flex items-center">
        <button
          onClick={scrollLeft}
          className={`transition-opacity duration-300 ease-in-out opacity-${canScrollLeft ? '100' : '0'} ${
            canScrollLeft ? 'visible' : 'invisible'
          } flex-shrink-0 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div
          ref={galleryRef}
          className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide"
        >
          {project.imageArr.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`${project.name} screenshot ${index + 1}`}
              className="w-auto h-40 sm:w-auto sm:h-80 md:w-160 md:h-96 object-cover flex-shrink-0 rounded-lg shadow"
            />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className={`transition-opacity duration-300 ease-in-out opacity-${canScrollRight ? '100' : '0'} ${
            canScrollRight ? 'visible' : 'invisible'
          } flex-shrink-0 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
