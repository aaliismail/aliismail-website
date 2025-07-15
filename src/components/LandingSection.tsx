import React from "react";

const LandingSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-neutral-100 mb-4">
        Hi, I'm Ali Ismail
      </h1>
      <p className="text-xl text-neutral-400 mb-8">
        Aspiring Software Engineer & Web Developer
      </p>
      <a
        href="/Ali_Ismail-Resume.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default LandingSection;