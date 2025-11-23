import { cn } from "features/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiShareForwardBoxLine } from "react-icons/ri";
import { ProjectsTechIcons } from "./ProjectsTechIcons";
import SectionTitle from "./typography/SectionTitle";

const PROJECT_LIST = [
  {
    name: "Trip Drop",
    description:
      "A collaborative travel planner where friends co-create itineraries in real time. Each itinerary renders on Google Maps, allowing users to visually confirm locations as they edit. I built the entire stack myself: design, frontend, backend, database, and secure authentication and authorization.",
    url: "https://trip-drop.vercel.app/",
    github: "https://github.com/LilyCalico/trip-drop",
    image: "/img/tripdrop/demo-pic.png",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Zustand",
      "SWR",
      "Supabase",
      "Figma",
      "Tailwind",
      "Shadcn/UI",
    ],
  },
  {
    name: "ToDo List",
    description:
      "A simple to-do list app built with React and JavaScript. It uses Firebase Realtime Database for persistent storage, lets you add, edit, and delete tasks, and supports drag-and-drop reordering with completion tracking.",
    url: "https://todo-app-one-dusky.vercel.app/",
    github: "https://github.com/LilyCalico/to-do-app",
    image: "/img/todo/todo.png",
    techStack: ["React", "JavaScript", "CSS3", "Firebase", "useContext"],
  },
];

function ProjectCard({ project }: { project: (typeof PROJECT_LIST)[number] }) {
  return (
    <div className="w-full max-w-[64rem] border border-black/5 rounded-[2rem] p-[2rem] hover:border-black/20 transition-colors duration-300">
      <div className="h-[30rem] bg-gray-200 rounded-[2rem] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={300}
          onClick={() => {
            window.open(project.url, "_blank");
          }}
          className="cursor-pointer hover:opacity-60 transition-opacity duration-300"
        />
      </div>
      <div className="my-[3rem]">
        <h1 className="mb-[1.2rem] text-[2rem] font-bold">{project.name}</h1>
        <p>{project.description}</p>
      </div>

      <div>
        <ul className="flex gap-[1rem] flex-wrap">
          {project.techStack.map((tech) => {
            return (
              <li
                key={tech}
                className={cn(
                  "flex items-center gap-[0.4rem] bg-gray-50 border border-transparent",
                  "rounded-[1.6rem] px-[0.8rem] py-[0.4rem] cursor-pointer",
                  "hover:bg-gray-100 transition-colors duration-300 hover:border-black/20",
                )}
              >
                {ProjectsTechIcons({
                  name: tech,
                  className: "text-[1.6rem] max-w-[1.6rem] max-h-[1.6rem]",
                })}
                <p className="text-[1rem] tracking-[0.03rem]">{tech}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-[1.5rem] mt-[2rem] items-center justify-center">
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-[0.4rem] w-[9rem] py-[0.4rem] rounded-[2rem]",
            "border border-black/10 hover:bg-black/5 hover:border-black/20",
            "transition-colors duration-300",
          )}
        >
          <RiShareForwardBoxLine className="text-[1.6rem]" />
          <p>Live</p>
        </Link>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-[0.4rem] w-[9rem] py-[0.4rem] rounded-[2rem]",
            "border border-black/10 hover:bg-black/5 hover:border-black/20",
            "transition-colors duration-300",
          )}
        >
          <FaGithub className="text-[1.6rem]" />
          <p>GitHub</p>
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />

      <div className="flex flex-col gap-[3rem]">
        {PROJECT_LIST.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
