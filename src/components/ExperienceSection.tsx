"use client";
import { experiences } from "@/data/experience";
import { Typewriter } from "react-simple-typewriter";

const ExperienceSection = () => (
  <section className="py-24 px-4 max-w-3xl mx-auto">
    {/* Subtitle */}
    <div className="text-center mb-2">
      <span className="text-lg text-neutral-400 font-mono tracking-wide">
        <Typewriter
          words={['My Journey']}
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
    <h2 className="text-6xl md:text-6xl font-bold text-white text-center mb-4 font-ibm">
      Work Experience
    </h2>
    {/* Description */}
    <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
      I’ve had the opportunity to work with some amazing people and companies.<br />
      Here’s a brief overview of my professional journey.
    </p>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="bg-neutral-800 border border-neutral-700 rounded-xl shadow-xl p-6 md:flex md:items-center md:space-x-6 mb-8 transition-transform hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Logo on the left (if present) */}
          {exp.logo && (
            <img
              src={exp.logo}
              alt={`${exp.company} Logo`}
              className="h-40 w-40 object-contain rounded-lg border border-neutral-700 bg-white p-2 mb-4 md:mb-0"
            />
          )}
          {/* Content on the right */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-green-400 mb-1">{exp.role}</h3>
            <div className="flex flex-wrap items-center text-neutral-300 mb-2">
              <span className="font-semibold text-white">{exp.company}</span>
              <span className="mx-2 text-neutral-500">|</span>
              <span className="text-neutral-400">{exp.location}</span>
              <span className="mx-2 text-neutral-500">|</span>
              <span className="text-neutral-400">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside pl-4 text-neutral-200 space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;