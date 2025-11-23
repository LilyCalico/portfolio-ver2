import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPaw } from "react-icons/fa";

const PAW_MARKS = [
  {
    position: "bottom-0 right-[15rem]",
    rotate: 50,
  },
  {
    position: "bottom-[-1rem] right-[13rem]",
    rotate: 20,
  },
  {
    position: "bottom-[2rem] right-[7rem]",
    rotate: 40,
  },
  {
    position: "bottom-[1rem] right-[5rem]",
    rotate: 10,
  },
  {
    position: "bottom-[6rem] right-0",
    rotate: 10,
  },
];

export default function Top() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(1);
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= PAW_MARKS.length ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="flex items-center justify-between gap-16">
      <div>
        <div className="mt-80 text-[3.2rem]">
          <h1>Hi, I'm Yuri👋</h1>
          <h1>
            A <span className="font-bold">Frontend Developer/UI Designer</span>
          </h1>
          <div className="text-[1.2rem] space-y-[0.6rem] mt-[1.2rem]">
            <p>I like to code to deliver value, not just features.</p>
          </div>
        </div>
        <div className="mt-32 flex gap-[1.6rem]">
          <Link
            href="https://www.linkedin.com/in/yuri-oda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.8rem] hover:opacity-50 transition-opacity duration-300"
          >
            <FaLinkedin className="text-[2rem] text-[#0077B5]" />
          </Link>
          <Link
            href="https://github.com/LilyCalico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.8rem] hover:opacity-50 transition-opacity duration-300"
          >
            <FaGithub className="text-[2rem]" />
          </Link>
        </div>
      </div>
      <div className="relative bg-red-100">
        <Image
          src="/img/blob-illust.png"
          alt="Yuri and her cat illustration"
          width={250}
          height={260}
          className="mt-40"
        />
        {PAW_MARKS.map((paw, index) => {
          const isVisible = visibleCount !== 0 && index < visibleCount;
          return (
            <FaPaw
              key={`${paw.position}-${paw.rotate}`}
              className={`absolute text-[1.2rem] text-paw transition-opacity duration-400 ease-out ${paw.position} ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: `rotate(${paw.rotate}deg)` }}
            />
          );
        })}
      </div>
    </section>
  );
}
