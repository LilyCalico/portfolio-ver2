import { useId, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

import { cn } from "../lib/cn";
import SectionTitle from "./typography/SectionTitle";

const experiences = [
  {
    period: "2022 - present",
    role: "Frontend Developer / UI Designer",
    company: "Freelance",
    bullets: [
      "Built UX-friendly interfaces and NFT features using JavaScript/TypeScript.",
      "Designed interfaces with a frontend perspective for easier development.",
      "Managed multiple projects under tight deadlines.",
    ],
  },
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

export default function Experience() {
  return (
    <section id="experience">
      <SectionTitle title="Experience" />

      <div className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.role} {...experience} />
        ))}
      </div>
    </section>
  );
}

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
    <div className="flex gap-8">
      <p className="w-48">{period}</p>
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
                <FaCheck className="mt-[0.2rem] text-[1.2rem] text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
