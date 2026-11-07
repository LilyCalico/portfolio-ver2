import { cn } from "features/lib/cn";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareForwardBoxLine } from "react-icons/ri";
import { ProjectsTechIcons } from "./ProjectsTechIcons";
import SectionTitle from "./typography/SectionTitle";

type Project = {
  name: string;
  description: ReactNode;
  url: string;
  github: string;
  image: string;
  techStack: string[];
};

const PROJECT_LIST: Project[] = [
  {
    name: "Trip Drop",
    description: (
      <p>
        A collaborative travel planner where friends co-create itineraries in
        real time. Each itinerary renders on Google Maps, allowing users to
        visually confirm locations as they edit. I built the entire stack
        myself: design, frontend, backend, database, and secure authentication
        and authorization.
      </p>
    ),
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
    description: (
      <p>
        A simple to-do list app built with React and JavaScript. It uses
        Firebase Realtime Database for persistent storage, lets you add, edit,
        and delete tasks, and supports drag-and-drop reordering with completion
        tracking. This project was built based on{" "}
        <a
          href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
          className="underline hover:text-primary transition-colors duration-300"
        >
          Frontend Mentor
        </a>
        .
      </p>
    ),
    url: "https://todo-app-one-dusky.vercel.app/",
    github: "https://github.com/LilyCalico/to-do-app",
    image: "/img/todo/todo.png",
    techStack: ["React", "JavaScript", "CSS3", "Firebase", "useContext"],
  },
];

function ProjectCard({ project }: { project: (typeof PROJECT_LIST)[number] }) {
  return (
    <div className="w-full max-w-xl border border-black/5 rounded-[1.25rem] p-6 hover:border-black/20 transition-colors duration-300">
      <Image
        src={project.image}
        alt={project.name}
        width={600}
        height={300}
        onClick={() => {
          window.open(project.url, "_blank");
        }}
        className="cursor-pointer hover:opacity-60 transition-opacity duration-300 rounded-[1.25rem] overflow-hidden mx-auto"
      />
      <div className="my-8">
        <h1 className="mb-3 text-2xl font-bold">
          {project.name}
        </h1>
        <div>{project.description}</div>
      </div>

      <div>
        <ul className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => {
            return (
              <li
                key={tech}
                className={cn(
                  "flex items-center gap-1.5 bg-gray-50 border border-transparent",
                  "rounded-full px-2.5 py-1 cursor-pointer",
                  "hover:bg-gray-100 transition-colors duration-300 hover:border-black/20",
                )}
              >
                {ProjectsTechIcons({
                  name: tech,
                  className: "size-3.5 text-sm",
                })}
                <p className="font-mono text-xs">{tech}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-4 mt-6 items-center justify-center">
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-sm",
            "border border-black/10 hover:bg-black/5 hover:border-black/20",
            "transition-colors duration-300",
          )}
        >
          <RiShareForwardBoxLine className="text-base" />
          <p>Live</p>
        </Link>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-sm",
            "border border-black/10 hover:bg-black/5 hover:border-black/20",
            "transition-colors duration-300",
          )}
        >
          <FaGithub className="text-base" />
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

      <div className={cn("grid gap-6", "lg:grid-cols-2")}>
        {PROJECT_LIST.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
