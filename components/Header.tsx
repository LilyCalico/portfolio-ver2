import Link from "next/link";
import { RiUserVoiceLine } from "react-icons/ri";

import { cn } from "../lib/cn";

export const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="header-enter fixed top-0 left-0 right-0 z-50 px-[8rem] pt-[6rem] bg-white/80">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={cn(
            "transition-colors duration-300",
            "text-[2.4rem] font-bold tracking-[0.2rem]",
            "hover:text-primary",
          )}
        >
          Yuri ODA
        </Link>
        <div className="flex gap-[5.4rem] tracking-[0.03rem] items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center justify-center px-[0.4rem] py-[0.3rem]"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-0",
                  "transition-transform ease-out",
                  "h-[2rem] w-[2rem]",
                  "group-hover:scale-100 group-hover:opacity-100",
                  "bg-primary",
                )}
              />
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <RiUserVoiceLine className="cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
}
