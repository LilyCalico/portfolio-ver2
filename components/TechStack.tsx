import TechChip from "./TechChip";
import SectionTitle from "./typography/SectionTitle";

// Each row starts on a new line (frontend / backend, infra and design)
const techStackRows = [
  [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Sass",
  ],
  ["Node.js", "NestJS", "Supabase", "AWS", "Figma"],
];

export default function TechStack() {
  return (
    <section id="tech-stack">
      <SectionTitle title="Tech Stack" />

      <div className="flex flex-col gap-2">
        {techStackRows.map((row) => (
          <ul key={row[0]} className="flex flex-wrap justify-center gap-2">
            {row.map((tech) => (
              <TechChip key={tech} name={tech} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
