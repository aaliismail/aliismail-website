import { experiences } from "@/data/experience";

const ExperienceSection = () => (
  <section className="py-24 px-4 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-12 font-ibm">
      <span className="text-green-400 mr-2">01.</span> Experience
    </h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-neutral-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-green-400 font-ibm">{exp.role}</h3>
            {exp.company === "DoseOfTravel" && (
              <img
                src="/dotc-logo.png"
                alt="DOTC Logo"
                className="h-20 w-auto ml-auto"
                style={{ marginTop: 2 }}
              />
            )}
          </div>
          <p className="text-white font-semibold font-ibm">{exp.company} <span className="text-neutral-400 font-normal">| {exp.location}</span></p>
          <p className="text-neutral-400 text-sm mb-2 font-ibm">{exp.period}</p>
          <ul className="list-disc list-inside text-white font-ibm">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;