import Link from "next/link";
import { type MouseEvent, useCallback, useState } from "react";
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
  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      closeMenu();

      if (typeof window === "undefined" || !href.startsWith("#")) {
        return;
      }

      event.preventDefault();

      const target = document.querySelector<HTMLElement>(href);
      if (!target) {
        return;
      }

      const headerElement = document.getElementById("header");
      const headerHeight =
        headerElement instanceof HTMLElement ? headerElement.offsetHeight : 0;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: Math.max(targetPosition, 0),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", href);
    },
    [closeMenu],
  );

  const nameAnimation = "transition-colors duration-300 hover:text-primary";

  return (
    <>
      <div
        id="header"
        className={cn(
          "header-enter",
          "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md backdrop-saturate-150",
          "page-gutter",
        )}
      >
        <div className="mx-auto flex h-(--header-height) max-w-page items-center justify-between">
          <Link
            href="/"
            className={cn(nameAnimation, "text-lg font-bold tracking-[0.04em]")}
            onClick={closeMenu}
          >
            Yuri ODA
          </Link>

          {/* md以上のメニュー */}
          <div
            className={cn(
              "hidden items-center gap-9 text-sm tracking-[0.03rem]",
              "md:flex",
            )}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative inline-flex items-center justify-center px-1 py-0.5"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-0",
                    "transition-transform ease-out",
                    "size-6",
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
          <div className={cn("block", "md:hidden")}>
            <button
              type="button"
              aria-label="メニューを開閉"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <AiOutlineMenu className="text-xl" />
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
          isMenuOpen ? "opacity-1000" : "pointer-events-none opacity-0",
          "md:hidden",
        )}
      />
      <nav
        className={cn(
          "fixed top-0 right-0 z-1001 flex h-screen w-64 max-w-[80vw] flex-col bg-white",
          "px-9 py-16",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "md:hidden",
        )}
      >
        <Link
          href="/"
          className={cn(
            nameAnimation,
            "font-bold text-lg tracking-[0.04em] cursor-pointer",
          )}
          onClick={closeMenu}
        >
          Yuri ODA
        </Link>
        <ul className="mt-12 flex flex-col gap-9 text-base">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "hover:text-primary transition-colors duration-300",
                )}
                onClick={(event) => handleNavClick(event, href)}
              >
                <span className="flex items-center gap-3">
                  <Icon className="text-sm" aria-hidden="true" />
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
