import Link from "next/link";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBriefcase, FaCode } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

import { cn } from "../lib/cn";

export const links = [
  { href: "#experience", label: "Experience", Icon: FaBriefcase },
  { href: "#projects", label: "Projects", Icon: FaCode },
  { href: "mailto:yuri.oda.dev@gmail.com", label: "Contact", Icon: FiMail },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const nameAnimation = "transition-colors duration-300 hover:text-primary";

  return (
    <>
      <div
        className={cn(
          "header-enter", // アニメーション
          "fixed top-0 left-0 right-0 z-50 bg-white/80",
          "px-[4rem] pt-[3rem] md:px-[8rem] md:pt-[6rem]",
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              nameAnimation,
              "text-[1.6rem] md:text-[2.4rem] font-bold tracking-[0.2rem]",
            )}
            onClick={closeMenu}
          >
            Yuri ODA
          </Link>

          {/* md以上のメニュー */}
          <div className="hidden items-center gap-[5.4rem] tracking-[0.03rem] md:flex">
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
            {/* <RiUserVoiceLine className="cursor-pointer hover:text-primary" /> */}
          </div>

          {/* md未満のメニュー */}
          <div className="block md:hidden">
            <button
              type="button"
              aria-label="メニューを開閉"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <AiOutlineMenu className="text-[2rem]" />
            </button>
          </div>
        </div>
      </div>

      {/* サイドメニュー */}
      {/* Backdrop */}
      <button
        type="button"
        aria-label="メニューを閉じる"
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 z-1000 bg-zinc-900/50 backdrop-blur-sm transition-opacity duration-300 ease-out",
          isMenuOpen
            ? "opacity-1000 md:hidden"
            : "pointer-events-none opacity-0",
          "md:hidden",
        )}
      />
      <nav
        className={cn(
          "fixed top-0 right-0 z-1001 flex h-screen w-[28rem] max-w-[80vw] flex-col bg-white",
          "px-[4.5rem] py-[8rem]",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden",
        )}
      >
        <Link
          href="/"
          className={cn(
            nameAnimation,
            "font-bold text-[1.6rem] tracking-[0.2rem] cursor-pointer",
          )}
          onClick={closeMenu}
        >
          Yuri ODA
        </Link>
        <ul className="mt-[6rem] flex flex-col gap-[4.5rem] text-[1.6rem]">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "hover:text-primary transition-colors duration-300",
                )}
                onClick={closeMenu}
              >
                <span className="flex items-center gap-[1.6rem]">
                  <Icon className="text-[1.4rem]" aria-hidden="true" />
                  <span className="tracking-[0.05rem]">{label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
