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
import { cn } from "../lib/cn";
import FigmaIcon from "../public/img/icon/figma.svg";
import FirebaseIcon from "../public/img/icon/firebase.png";
import ShadcnIcon from "../public/img/icon/shadcnui.svg";
import SWRIcon from "../public/img/icon/swr.svg";
import ZustandIcon from "../public/img/icon/zustand.svg";

const IMAGE_ICON_SIZE = 16;

export const ProjectsTechIcons = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  switch (name) {
    case "React":
      return <FaReact className={cn("text-react", className)} />;
    case "Next.js":
      return <SiNextdotjs className={cn("text-nextjs", className)} />;
    case "TypeScript":
      return <SiTypescript className={cn("text-typescript", className)} />;
    case "Supabase":
      return <SiSupabase className={cn("text-supabase", className)} />;
    case "Tailwind":
      return <SiTailwindcss className={cn("text-tailwind", className)} />;
    case "AWS":
      return <FaAws className={cn("text-aws", className)} />;
    case "Sass":
      return <FaSass className={cn("text-sass", className)} />;
    case "JavaScript":
      return <SiJavascript className={cn("text-javascript", className)} />;
    case "HTML":
      return <SiHtml5 className={cn("text-html", className)} />;
    case "CSS3":
      return <SiCss3 className={cn("text-css", className)} />;
    case "Figma":
      return (
        <Image
          src={FigmaIcon}
          alt="Figma"
          width={IMAGE_ICON_SIZE}
          height={IMAGE_ICON_SIZE}
          className={className}
        />
      );
    case "Shadcn/UI":
      return (
        <Image
          src={ShadcnIcon}
          alt="Shadcn/UI"
          width={IMAGE_ICON_SIZE}
          height={IMAGE_ICON_SIZE}
          className={className}
        />
      );
    case "SWR":
      return (
        <Image
          src={SWRIcon}
          alt="SWR"
          width={IMAGE_ICON_SIZE}
          height={IMAGE_ICON_SIZE}
          className={className}
        />
      );
    case "Zustand":
      return (
        <Image
          src={ZustandIcon}
          alt="Zustand"
          width={IMAGE_ICON_SIZE}
          height={IMAGE_ICON_SIZE}
          className={className}
        />
      );
    case "Firebase":
      return (
        <Image
          src={FirebaseIcon}
          alt="Firebase"
          width={IMAGE_ICON_SIZE}
          height={IMAGE_ICON_SIZE}
          className={className}
        />
      );
  }
};
