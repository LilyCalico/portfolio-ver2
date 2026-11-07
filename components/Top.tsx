import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPaw } from "react-icons/fa";

import { cn } from "../lib/cn";

const PAW_MARKS = [
  {
    position: "bottom-0 right-[66%]",
    rotate: 50,
  },
  {
    position: "bottom-[-4%] right-[57%]",
    rotate: 20,
  },
  {
    position: "bottom-[8.5%] right-[31%]",
    rotate: 40,
  },
  {
    position: "bottom-[4%] right-[22%]",
    rotate: 10,
  },
  {
    position: "bottom-[25%] right-0",
    rotate: 10,
  },
];

export default function Top() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(1);
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= PAW_MARKS.length ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className={cn(
        "flex flex-col items-center gap-8 pt-16 pb-8",
        "md:flex-row md:justify-between md:gap-12 md:pt-24 md:pb-12",
        "lg:pt-32 lg:pb-16",
      )}
    >
      {/* 紹介文 */}
      <div
        className={cn(
          "hero-intro-left order-2",
          "md:order-1",
        )}
      >
        <div>
          <h2 className="text-xl">
            Hi, I'm Yuri👋
          </h2>
          <h1
            className="text-4xl mt-2"
          >
            A{" "}
            <span className="font-semibold">
              Frontend Developer/UI Designer
            </span>
          </h1>
          <div className="mt-6">
            <p>
              I am passionate about coding to deliver value, not just features.
            </p>
          </div>
        </div>
        <div className="mt-16 flex gap-4">
          <Link
            href="https://www.linkedin.com/in/yuri-oda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.8rem] hover:opacity-50 transition-opacity duration-300"
          >
            <FaLinkedin className="text-xl text-[#0077B5]" />
          </Link>
          <Link
            href="https://github.com/LilyCalico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.8rem] hover:opacity-50 transition-opacity duration-300"
          >
            <FaGithub className="text-xl" />
          </Link>
        </div>
      </div>

      {/* 写真 */}
      <div
        className={cn(
          "hero-intro-right relative order-1 w-fit shrink-0",
          "md:order-2",
        )}
      >
        <Image
          src="/img/blob-illust.png"
          alt="Yuri and her cat illustration"
          width={250}
          height={260}
          className={cn("h-auto w-50", "md:w-65")}
        />
        {PAW_MARKS.map((paw, index) => {
          const isVisible = visibleCount !== 0 && index < visibleCount;
          return (
            <FaPaw
              key={`${paw.position}-${paw.rotate}`}
              className={`absolute text-xs text-paw transition-opacity duration-400 ease-out ${paw.position} ${isVisible ? "opacity-100" : "opacity-0"
                }`}
              style={{ transform: `rotate(${paw.rotate}deg)` }}
            />
          );
        })}
      </div>
    </section>
  );
}
