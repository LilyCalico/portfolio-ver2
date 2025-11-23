import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-10 text-gray-600">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://www.linkedin.com/in/yuri-oda/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition-colors duration-200 hover:border-black/30 hover:bg-black/5"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="mailto:yuri.oda.dev@gmail.com"
            className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm transition-colors duration-200 hover:border-black/30 hover:bg-black/5"
          >
            <FiMail className="text-lg" />
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
