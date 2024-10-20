import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import VerticalTimelineComponent from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool, FaBriefcase, FaCode } from "react-icons/fa";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiCsharp,
  SiCplusplus,
  SiTypescript,
  SiGooglecloud,
  SiLinux,
  SiAmazon,
  SiDocker,
  SiDotnet,
  SiPostman,
  SiPowershell,
  SiFigma,
  SiFirebase,
  SiMysql,
  SiGnubash,
  SiC,
  SiJira,
  SiConfluence,
  SiSlack,
  SiGithub,
  SiVisualstudiocode,
  SiVisualstudio,
  SiRider,
} from "react-icons/si";

const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineComponent;

interface Certificate {
  awardName: string;
  imagePath: string;
}

interface AboutMeData {
  aboutMe: string;
  picturePath: string;
  certificates: Certificate[];
}

export const loader = async () => {
  const jsonData = JSON.parse(
    fs.readFileSync(path.resolve("app/server/aboutMe.json"), "utf-8")
  );
  return json(jsonData);
};

export default function Experience() {
  const aboutMeData = useLoaderData<AboutMeData>();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  function openModal(certificate: Certificate) {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedCertificate(null);
    setIsOpen(false);
  }
  return (
    <div
      className="experience"
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={
          isOpen
            ? "filter blur-sm transition duration-300 ease-in-out"
            : "transition duration-300 ease-in-out"
        }
      >
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Nelson Mandela High School, Calgary, Alberta
            </h3>
            <p>High School Diploma</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Calgary, Calgary, Alberta
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor&apos;s Degree
            </h4>
            <p>Software Engineering</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2022 - Jan 2024"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Engineer - Schulich UAV
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Alberta
            </h4>
            <p>
              Developed the front end of a website to assist with mission
              objectives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Aug 2024"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Software Engineer - Symend
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Alberta
            </h4>
            <p>Fullstack software engineer at a SaaS startup</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="flex flex-col items-center mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies & Languages</h2>
          <div
            className="bg-red-100 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-7 mb-8 overflow-y-auto border-4 border-red-100 rounded-lg"
            style={{ maxHeight: "260px" }}
          >
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiJava size={70} title="Java" />
              <span className="mt-2 text-sm ">Java</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiCplusplus size={70} title="C++" />
              <span className="mt-2 text-sm">C++</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiCsharp size={70} title="C#" />
              <span className="mt-2 text-sm">C#</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiJavascript1 size={70} title="JavaScript" />
              <span className="mt-2 text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiTypescript size={70} title="TypeScript" />
              <span className="mt-2 text-sm">TypeScript</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiReact size={70} title="React" />
              <span className="mt-2 text-sm">React</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiNodejsSmall size={70} title="Node.js" />
              <span className="mt-2 text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiDocker size={70} title="Docker" />
              <span className="mt-2 text-sm">Docker</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiPython size={70} title="Python" />
              <span className="mt-2 text-sm">Python</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiC size={70} title="C" />
              <span className="mt-2 text-sm">C</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiGooglecloud size={70} title="Google Cloud" />
              <span className="mt-2 text-sm">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiLinux size={70} title="Linux" />
              <span className="mt-2 text-sm">Linux</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiAmazon size={70} title="AWS" />
              <span className="mt-2 text-sm">AWS</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiDotnet size={70} title=".NET" />
              <span className="mt-2 text-sm">ASP.NET</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiGithub size={70} title="GitHub" />
              <span className="mt-2 text-sm">GitHub</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiJira size={70} title="Jira" />
              <span className="mt-2 text-sm">Jira</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiCss3 size={70} title="CSS3" />
              <span className="mt-2 text-sm">CSS3</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <DiHtml5 size={70} title="HTML5" />
              <span className="mt-2 text-sm">HTML5</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiPostman size={70} title="Postman" />
              <span className="mt-2 text-sm">Postman</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiPowershell size={70} title="PowerShell" />
              <span className="mt-2 text-sm">PowerShell</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <FaCode size={70} title="Assembly" />
              <span className="mt-2 text-sm">Assembly</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiFigma size={70} title="Figma" />
              <span className="mt-2 text-sm">Figma</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiFirebase size={70} title="Firebase" />
              <span className="mt-2 text-sm">Firebase</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiMysql size={70} title="MySQL" />
              <span className="mt-2 text-sm">SQL</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiGnubash size={70} title="Bash" />
              <span className="mt-2 text-sm">Bash</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiConfluence size={70} title="Confluence" />
              <span className="mt-2 text-sm">Confluence</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiSlack size={70} title="Slack" />
              <span className="mt-2 text-sm">Slack</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiVisualstudiocode size={70} title="VSCode" />
              <span className="mt-2 text-sm">VSCode</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiVisualstudio size={70} title="Visual Studio" />
              <span className="mt-2 text-sm">Visual Studio</span>
            </div>
            <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
              <SiRider size={70} title="Rider" />
              <span className="mt-2 text-sm">Rider</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {aboutMeData.certificates.map((certificate, index) => (
              <button
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <div className="w-64 h-48 relative">
                  <img
                    src={certificate.imagePath}
                    alt={certificate.awardName}
                    className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 ease-in-out transform hover:blur-sm"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 ease-in-out rounded-lg">
                    <span className="text-white text-xl font-bold">Click</span>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-center">
                  {certificate.awardName}
                </h3>
              </button>
            ))}
          </div>
        </div>
        ;
      </div>
      {selectedCertificate && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-70"
              leave="ease-in duration-200"
              leaveFrom="opacity-70"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-opacity-100"
                aria-hidden="true"
              />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-full p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-orange-200 p-6 text-left align-middle shadow-xl transition-all">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 text-center"
                    >
                      {selectedCertificate.awardName}
                    </DialogTitle>
                    <div className="mt-4">
                      <img
                        src={selectedCertificate.imagePath}
                        alt={selectedCertificate.awardName}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
}
