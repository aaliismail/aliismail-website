

const projects = [
  {
    title: "Project Title",
    description: "Short description of your project.",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://github.com/yourusername/project",
  },
  // Add more projects as needed
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-12 font-mono">
      <span className="text-green-400 mr-2">02.</span> Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-neutral-800 rounded-lg p-6 shadow-lg flex flex-col">
          <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
          <p className="text-white mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-400 font-mono hover:underline mt-auto">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;