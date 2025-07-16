"use client";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-green-400 bg-neutral-900 fixed top-0 left-0 z-50">
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
        <a href="/experience" className="text-white font-mono tracking-widest hover:underline underline-offset-8 decoration-green-400 transition">
          <span className="text-green-400 mr-1">01.</span> EXPERIENCE
        </a>
        <a href="/projects" className="text-white font-mono tracking-widest hover:underline underline-offset-8 decoration-green-400 transition">
          <span className="text-green-400 mr-1">02.</span> PROJECTS
        </a>
        <a href="/contact" className="text-white font-mono tracking-widest hover:underline underline-offset-8 decoration-green-400 transition">
          <span className="text-green-400 mr-1">03.</span> CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;