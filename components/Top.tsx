import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Top() {
  return (
    <section id="top" className="flex justify-between items-center">
      <div>
        <div className="text-[3.2rem] mt-[20rem]">
          <h1>Hi, I'm Yuri👋</h1>
          <h1>
            A <span className="font-bold">Frontend Developer/UI Designer</span>
          </h1>
        </div>
        <div className="mt-[8rem] flex gap-[1.6rem]">
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
      <div>
        <p>ここにimage</p>
      </div>
    </section>
  );
}
