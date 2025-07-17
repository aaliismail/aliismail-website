"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="
  fixed top-0 left-0 w-full z-50
  bg-white/30 dark:bg-neutral-900/30
  backdrop-blur-md backdrop-saturate-150
  border-b border-green-400
  flex items-center justify-between px-8 py-4
  transition-colors
">
      {/* Logo/Initials */}
      <div className="flex items-center">
        <Link
          href="/"
          className="w-10 h-10 rounded-full border-2 border-green-400 flex items-center justify-center font-bold text-green-400 text-lg transition
            hover:bg-green-400 hover:text-neutral-900"
        >
          <span className="transition">AI</span>
        </Link>
      </div>
      {/* Section Links */}
      <div className="flex space-x-8">
        <a
          href="/experience"
          className="animated-underline text-white font-mono tracking-widest transition"
        >
          <span className="text-green-400 mr-1">01.</span> EXPERIENCE
        </a>
        <a
          href="/projects"
          className="animated-underline text-white font-mono tracking-widest transition"
        >
          <span className="text-green-400 mr-1">02.</span> PROJECTS
        </a>
        <a
          href="/contact"
          className="animated-underline text-white font-mono tracking-widest transition"
        >
          <span className="text-green-400 mr-1">03.</span> CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;