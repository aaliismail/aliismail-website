"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function ContactSection() {
  return (
    <section className="py-24 px-4 max-w-2xl mx-auto">
      {/* Divider/Subtitle */}
      <div className="text-center mb-2">
        <span className="text-lg text-green-400 font-mono tracking-wide">
          <Typewriter
            words={["Get In Touch"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </div>
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-neutral-900 text-center mb-2 font-ibm dark:text-white">
        Let&apos;s Connect
      </h2>
      {/* Description */}
      <p className="text-center text-neutral-500 max-w-xl mx-auto mb-10">
        I&apos;m always excited to collaborate on interesting projects or discuss new opportunities.
      </p>
      {/* Card */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow p-8 mx-auto max-w-lg flex flex-col items-center">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Wanna Talk?</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-center">
          Whether you have a question about my work, want to discuss an idea, or just want to say hello, I&apos;ll get back to you promptly.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ismailali12065@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg shadow hover:bg-green-700 transition mb-4"
        >
          SEND ME AN EMAIL <FaEnvelope className="ml-2" />
        </a>
        <div className="text-neutral-500 mb-2">or find me on</div>
        <div className="flex gap-4 mb-6">
          <a
            href="https://github.com/aaliismail"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-600 text-green-600 rounded-lg p-2 text-2xl hover:bg-green-50/20 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-ismail-697275284/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-600 text-green-600 rounded-lg p-2 text-2xl hover:bg-green-50/20 transition"
          >
            <FaLinkedin />
          </a>
        </div>
        <hr className="w-full border-t border-neutral-200 dark:border-neutral-700 mb-2" />
        <div className="text-xs text-neutral-400 text-center">
          Based in <span className="text-green-400 font-semibold">HTX / NYC</span> and open to opportunities worldwide.
        </div>
      </div>
    </section>
  );
}