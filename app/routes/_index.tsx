import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaptopCode,
  FaGraduationCap,
  FaCode,
  FaServer,
  FaBookOpen,
} from "react-icons/fa";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export const loader = async () => {
  const jsonData = JSON.parse(
    fs.readFileSync(path.resolve("app/server/aboutMe.json"), "utf-8")
  );
  return json(jsonData);
};

interface Certificate {
  awardName: string;
  imagePath: string;
}

interface AboutMeSection {
  title: string;
  icon: string;
  iconColor: string;
  content: string;
}

interface AboutMeData {
  aboutMe: string;
  picturePath: string;
  certificates: Certificate[];
  aboutMeSections: AboutMeSection[];
}

const getIconComponent = (
  iconName: string,
  iconColor: string,
  size: number
) => {
  const iconMap: Record<string, React.ReactNode> = {
    FaBookOpen: <FaBookOpen className={`text-${iconColor}`} size={size} />,
    FaCode: <FaCode className={`text-${iconColor}`} size={size} />,
    FaServer: <FaServer className={`text-${iconColor}`} size={size} />,
    FaGraduationCap: (
      <FaGraduationCap className={`text-${iconColor}`} size={size} />
    ),
    FaLaptopCode: <FaLaptopCode className={`text-${iconColor}`} size={size} />,
  };

  return iconMap[iconName] || null;
};

export default function About() {
  const data = useLoaderData<AboutMeData>();

  const email = "hassan.baig@ucalgary.ca";
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-center w-full max-w-5xl">
        <div className="w-full md:w-2/5 flex justify-center md:justify-end p-4">
          <img
            src={data.picturePath}
            alt="Profile pic of me, Hassan"
            className="rounded-full object-cover w-48 h-48 md:w-80 md:h-80 border-4 border-red-100"
          />
        </div>

        <div className="hidden md:block w-px bg-red-100 mx-4" />

        <div className="w-full md:w-3/5 flex flex-col justify-between p-2 relative items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 text-blue-600 text-center md:text-left">
              Hello, I am...
            </h1>
            <div
              className="text-2xl md:text-4xl font-bold text-center md:text-left break-words max-w-full overflow-hidden"
              style={{ height: "6rem" }}
            >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Hassan Baig",
                    "A Software Engineer",
                    "A coffee-addicted, animal-loving software nerd",
                  ],
                }}
              />
            </div>
          </div>

          <div className="flex space-x-6 mt-4 self-center">
            <a
              href="https://github.com/MirzaHB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600"
            >
              <FaGithub size={50} />
            </a>

            <a
              href="https://www.linkedin.com/in/mirza-hassan-baig-a33780229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600"
            >
              <FaLinkedin size={50} />
            </a>

            <CopyToClipboard
              text={email}
              onCopy={() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              <button
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                title={copied ? "Email copied!" : "Copy email"}
              >
                <FaEnvelope size={50} />
              </button>
            </CopyToClipboard>
          </div>

          {copied && (
            <div className="absolute bottom-16 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-100 text-green-700 px-4 py-2 rounded">
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>

      <div className="w-full max-w-5xl border-t border-red-100 mt-8" />

      <div className="w-full max-w-5xl p-4 mt-8">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.aboutMeSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105 border-l-4 hover:border-blue-500"
            >
              <div className="flex items-center mb-4">
                {getIconComponent(section.icon, section.iconColor, 30)}
                <h3 className="text-xl font-semibold ml-3">{section.title}</h3>
              </div>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl p-4 mt-12 mb-8">
        <h2 className="text-3xl font-bold mb-8 text-center">My Blog</h2>
        <div className="flex justify-center">
          <a
            href="/blogs"
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-105 w-full max-w-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Check Out My Latest Thoughts
              </h3>
              <p className="text-gray-700 mb-4">
                Explore my articles on software development, technology, and
                more.
              </p>
              <div className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-700">
                View Blog Posts
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
