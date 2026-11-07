import { cn } from "../lib/cn";
import { ProjectsTechIcons } from "./ProjectsTechIcons";

export default function TechChip({ name }: { name: string }) {
  return (
    <li
      className={cn(
        "flex items-center gap-1.5 bg-gray-50 border border-transparent",
        "rounded-full px-2.5 py-1",
        "hover:bg-gray-100 transition-colors duration-300 hover:border-black/20",
      )}
    >
      {ProjectsTechIcons({
        name,
        className: "size-3.5 text-sm",
      })}
      <p className="font-mono text-xs">{name}</p>
    </li>
  );
}
