"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const LandingSection = () => {
  return (
    <section
      className="flex flex-col justify-center items-center h-screen px-4 bg-neutral-900"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-5xl gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <p className="text-white mb-2 text-base md:text-lg font-ibm">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 font-sans">
            Ali Ismail.
          </h1>
          <h2 className="text-xl md:text-2xl font-ibm text-green-400 mb-4 font-semibold">
            <Typewriter
              words={['I Code.', 'I Build.', 'I Learn.']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <div className="text-white font-ibm text-base md:text-lg space-y-4 max-w-xl mb-8">
            <p>
              I’ve always had a thorough drive to develop my mind and character. Doing so through code has been a humbling, yet fruitful journey.
            </p>
            <p>
              I’m currently studying Computer Science and love building beautiful, functional web experiences.
            </p>
            <p>
              I’m always open to learning about new things, and I love to build. Reach out to me if you’d like to chat!
            </p>
          </div>
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 p-2 rounded hover:bg-green-50/10 transition transform hover:-translate-y-1"
            >
              {/* GitHub SVG icon */}
              <svg width="24" height="24" fill="none" stroke="currentColor" className="text-green-400"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-400 p-2 rounded hover:bg-green-50/10 transition transform hover:-translate-y-1"
            >
              {/* LinkedIn SVG icon */}
              <svg width="24" height="24" fill="none" stroke="currentColor" className="text-green-400"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <a
            href="/Ali_Ismail-sofwtare.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-50/10 transition transform hover:-translate-y-1 font-ibm"
          >
            <span>Download Resume</span>
            {/* PDF icon */}
            <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V8l-6-6H6z"/><path d="M14 2v6h6"/></svg>
          </a>
        </div>
        {/* Right: Profile Image and Email */}
        <div className="flex-1 flex flex-col items-center justify-center mb-8 md:mb-0">
          <div className="absolute w-[260px] h-[260px] rounded-full bg-green-400 opacity-30 blur-2xl z-0"></div>
          <Image
            src="/your-photo.jpg"
            alt="Ali Ismail"
            width={320}
        height= {320}
            className="rounded-full shadow-lg relative z-10 object-cover aspect-square transition"
          />
          <p className="font-ibm text-green-400 mt-6 text-lg text-center z-10">
            [aismail7@cougarnet.uh.edu]
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;