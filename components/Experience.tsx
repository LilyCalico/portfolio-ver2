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
  backgroundSize: "100% 1.1em",
  backgroundPosition: "0 100%",
};

const experiences = [
  {
    period: "2023 - 2025",
    role: "Frontend Developer / UI Designer",
    company: "First Loop Technologies, Inc. (Startup) ・ Full-time",
    bullets: [
      "Dev:Built RFID inventory and admin dashboards with Next.js, integrating Cognito auth on the frontend while aligning fuzzy requirements directly with the PM.",
      "Design: Onboarded 4 engineers with study sessions and reviews; sold execs on ROI and cut design turnaround time to under 25% with Figma.",
      "Soft Skills: Led a ~6-person development team, managing progress and supporting members throughout the development process.",
    ],
  },
  {
    period: "2022 - present",
    role: "Frontend Developer / UI Designer",
    company:
      "Freelance(NFT Marketing Project, Software Design@R1 TECHNOLOGIES LLC)",
    bullets: [
      "Dev: Prefetched off-screen NFT ownership states to speed up the behavior of NFT ownership-verification websites with React.",
      "Design: Built reusable components with shadcn/ui so engineers could assemble applications faster and easier.",
      "Soft Skills: Front-loaded specs, closed gaps early, and shipped overlapping design work plus two development tracks on one-week deadlines without delays.",
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
    <div className={cn("flex flex-col gap-2", "md:flex-row")}>
      <p
        className={cn(
          "w-38 shrink-0 pt-[0.2em]",
          "font-mono text-sm text-foreground/60",
        )}
      >
        {period}
      </p>
      <div className="max-w-170">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={detailsId}
          className={cn(
            "flex cursor-pointer items-center gap-2 text-left text-lg font-bold",
            "md:text-xl",
          )}
        >
          <RiArrowDropDownLine
            className={cn(
              "text-2xl transition-transform duration-300",
              isOpen ? "rotate-180" : "rotate-0",
            )}
          />
          <span>{role}</span>
        </button>
        <p className="ml-8 text-sm text-foreground/60">{company}</p>
        <div
          id={detailsId}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-out",
            isOpen
              ? "max-h-[40em] translate-y-0 opacity-100"
              : "max-h-0 -translate-y-2 opacity-0",
          )}
        >
          <ul className="ml-1 mt-3 space-y-2">
            {bullets.map((bullet) => {
              const [rawLabel, ...restParts] = bullet.split(":");
              const label = rawLabel.trim();
              const rest = restParts.join(":").trim();
              const shouldHighlight =
                restParts.length > 0 &&
                ["Dev", "Design", "Soft Skills"].includes(label);

              return (
                <li key={bullet} className="flex items-start gap-2">
                  <FaCheck className="mt-[0.4em] text-xs text-primary shrink-0" />
                  <span>
                    {shouldHighlight ? (
                      <>
                        <span className="rounded border border-primary-dark/50 px-[0.45em] py-[0.15em] font-mono font-semibold text-xs bg-primary/30">
                          {label}
                        </span>
                        {rest && <span className="ml-1"> {rest}</span>}
                      </>
                    ) : (
                      bullet
                    )}
                  </span>
                </li>
              );
            })}
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

      <div className="mb-12 text-lg">
        <p className="space-y-[0.4rem]">
          I’m passionate about building products that genuinely help{" "}
          <strong className="inline pb-[0.1rem]" style={HIGHLIGHT_STYLE}>
            users and teams.
          </strong>
        </p>
        <p>
          My B2B sales experience has given me strong{" "}
          <strong className="inline pb-[0.1rem]" style={HIGHLIGHT_STYLE}>
            communication and{" "}
            <span className="whitespace-nowrap">cross-functional</span>{" "}
            collaboration skills.
          </strong>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.role} {...experience} />
        ))}
      </div>
    </section>
  );
}
