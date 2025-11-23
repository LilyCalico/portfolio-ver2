import Image from "next/image";
import { FaAws, FaReact, FaSass } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
    icon: <SiCss3 className="text-css" />,
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
        className="h-[2.4rem] w-[2.4rem]"
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
    <section id="tech-stack" className="mt-40">
      <SectionTitle title="Tech Stack" />

      <div className="flex max-w-[50rem] flex-wrap gap-8">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex w-[6rem] flex-col items-center gap-[0.8rem]"
          >
            <div className="flex h-[2.4rem] w-[2.4rem] items-center justify-center text-[2.4rem]">
              {tech.icon}
            </div>
            <span className="text-[1.2rem]">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
