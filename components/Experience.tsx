import type { CSSProperties } from "react";
import { useId, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import { cn } from "../lib/cn";
import SectionTitle from "./typography/SectionTitle";

const HIGHLIGHT_STYLE: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, rgba(208,221,191,0) 60%, rgba(208,221,191,0.5) 60%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 1.5rem",
  backgroundPosition: "0 100%",
};

const experiences = [
  {
    period: "2023 - 2025",
    role: "Frontend Developer / UI Designer",
    company: "First Loop Technologies, Inc. (Startup) ・ Full-time",
    bullets: [
      "Developed DX app interfaces with Next.js and integrated with AWS/Python APIs.",
      "Led a small frontend team, managing progress and supporting members throughout the development process.",
      "Established and led a design team.",
    ],
  },
  {
    period: "2022 - present",
    role: "Frontend Developer / UI Designer",
    company: "Freelance(NFT Marketing Project, Software Design)",
    bullets: [
      "Built UX-friendly interfaces and NFT features using JavaScript/TypeScript.",
      "Designed interfaces with a frontend perspective for easier development.",
      "Managed multiple projects under tight deadlines.",
    ],
  },
  {
    period: "2016 - 2022",
    role: " Coorporate Sales",
    company: "Manufacturing,  Edtech (Startup)・ Full-time",
    bullets: [
      "Facilitated communication and coordination with clients and internal teams.",
      "Identified business issues and proposed practical solutions.",
      "Built negotiation and problem-solving skills applicable to development.",
    ],
  },
];

type ExperienceEntryProps = (typeof experiences)[number];

function ExperienceEntry({
  period,
  role,
  company,
  bullets,
}: ExperienceEntryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = useId();

  return (
    <div className={cn("flex flex-col gap-[0.5rem]", "md:flex-row")}>
      <p className={cn("ml-[2rem] md:ml-0", "w-48 shrink-0 text-black/60")}>
        {period}
      </p>
      <div className="max-w-[55rem]">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          className="flex cursor-pointer items-center gap-[0.4rem] text-left text-[1.8rem] font-bold"
        >
          <RiArrowDropDownLine
            className={cn(
              "text-[2rem] transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0",
            )}
          />
          <span>{role}</span>
        </button>
        <p className="ml-[2.4rem] text-[1.2rem]">{company}</p>
        <div
          id={detailsId}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            isOpen
              ? "max-h-112 translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0",
          )}
        >
          <ul className="ml-[0.4rem] mt-[1.2rem] space-y-[0.8rem]">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-[0.8rem]">
                <FaCheck className="mt-[0.2rem] text-[1.2rem] text-primary shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle title="Experience" />

      <div className="mb-[3rem]">
        <p className="space-y-[0.4rem]">
          I’m passionate about building products that genuinely help{" "}
          <strong className="inline pb-[0.1rem]" style={HIGHLIGHT_STYLE}>
            users and teams.
          </strong>
        </p>
        <p>
          My B2B sales experience has given me strong{" "}
          <strong className="inline pb-[0.1rem]" style={HIGHLIGHT_STYLE}>
            communication and cross-functional collaboration skills.
          </strong>
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.role} {...experience} />
        ))}
      </div>
    </section>
  );
}
