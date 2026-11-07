import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10">
      <div className="flex w-full flex-col items-center gap-6 py-10 text-gray-600">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/yuri-oda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition-colors duration-200 hover:border-black/30 hover:bg-black/5"
          >
            <FaLinkedin className="text-base" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="mailto:yuri.oda.lily@gmail.com"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition-colors duration-200 hover:border-black/30 hover:bg-black/5"
          >
            <FiMail className="text-base" />
            <span>Contact</span>
          </Link>
        </div>
        <p className="text-center text-xs leading-relaxed text-gray-500">
          {year} © Yuri ODA
        </p>
      </div>
    </footer>
  );
}
