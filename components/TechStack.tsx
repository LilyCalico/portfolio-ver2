import Image from "next/image";
import { FaAws, FaReact, FaSass } from "react-icons/fa";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { cn } from "../lib/cn";
import FigmaIcon from "../public/img/icon/figma.svg";
import SectionTitle from "./typography/SectionTitle";

const techStack = [
  {
    name: "React",
    icon: <FaReact className="text-react" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-typescript" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-javascript" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-html" />,
  },
  {
    name: "CSS",
    icon: <SiCss className="text-css" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-tailwind" />,
  },
  {
    name: "SASS",
    icon: <FaSass className="text-sass" />,
  },
  {
    name: "Figma",
    icon: (
      <Image
        src={FigmaIcon}
        alt="Figma"
        width={24}
        height={24}
        className="size-7"
      />
    ),
  },
  {
    name: "AWS",
    icon: <FaAws className="text-aws" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-supabase" />,
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack">
      <SectionTitle title="Tech Stack" />

      <div
        className={cn(
          "grid grid-cols-4 gap-x-2 gap-y-7",
          "sm:grid-cols-6",
          "lg:grid-cols-11",
        )}
      >
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            <div className="flex size-7 items-center justify-center text-2xl">
              {tech.icon}
            </div>
            <span className="font-mono text-xs">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
