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

export default function Experience() {
  return (
    <div
      className="experience"
      style={{
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
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
            <DiPython size={70} title="Python" />
            <span className="mt-2 text-sm">Python</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
            <SiC size={70} title="C" />
            <span className="mt-2 text-sm">C</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
            <SiCsharp size={70} title="C#" />
            <span className="mt-2 text-sm">C#</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
            <SiCplusplus size={70} title="C++" />
            <span className="mt-2 text-sm">C++</span>
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
            <SiDocker size={70} title="Docker" />
            <span className="mt-2 text-sm">Docker</span>
          </div>
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-red-500">
            <SiDotnet size={70} title=".NET" />
            <span className="mt-2 text-sm">.NET</span>
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
            <SiJira size={70} title="Jira" />
            <span className="mt-2 text-sm">Jira</span>
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
            <SiGithub size={70} title="GitHub" />
            <span className="mt-2 text-sm">GitHub</span>
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
    </div>
  );
}
