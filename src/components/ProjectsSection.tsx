"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

type Project = {
  title: string;
  subtitle: string;
  description: string[];
  skills: string[];
  github?: string;
  website?: string;
};

const projects: Project[] = [
  {
    title: "Dose Of Travel Club Website",
    subtitle: "React, Node.js, AWS Lambda, Python, DynamoDB",
    description: [
      "Engineered and launched a full-stack serverless application using React, Node.js, and AWS Lambda, supporting over 15,000 monthly active users.",
      "Developed and integrated a recommendation engine using Python and AWS services, improving user engagement and reducing manual customer service workload by 60%.",
      "Optimized application performance by implementing efficient data querying with DynamoDB and refining backend API logic, resulting in a 20% reduction in response times."
    ],
    skills: ["React", "Node.js", "AWS Lambda", "Python", "DynamoDB",],
    github: "https://github.com/yourusername/dose-of-travel-club", // Update with actual link if available
    website: "https://doseoftravelclub.com", // Update with actual link if available
  },
  {
    title: "Serverless RAG Chatbot on AWS",
    subtitle: "AWS Lambda, Bedrock, API Gateway, S3, Terraform, Docker",
    description: [
      "Designed and deployed a fully serverless, AI-powered chatbot on AWS, leveraging Lambda, API Gateway, and Amazon Bedrock to implement a Retrieval Augmented Generation (RAG) architecture.",
      "Engineered a data ingestion pipeline using S3 event triggers to automatically vectorize and store documents in an Amazon OpenSearch vector database, enabling real-time contextual responses.",
      "Defined the entire serverless infrastructure as code using Terraform, enabling automated, version-controlled deployments via a CI/CD pipeline.",
    ],
    skills: ["AWS Lambda", "Amazon Bedrock", "API Gateway", "S3", "Terraform", "Docker", "OpenSearch"],
  },
  {
    title: "Automated CI/CD Pipeline for Infrastructure",
    subtitle: "AWS CodePipeline, Terraform, Git",
    description: [
      "Constructed a robust CI/CD pipeline with AWS CodePipeline and CodeBuild that automatically deploys infrastructure changes defined in Terraform upon commits to a Git repository.",
      "Authored modular Terraform configurations to manage all cloud resources, reducing manual deployment time by 95% and ensuring environment consistency.",
    ],
    skills: ["AWS CodePipeline", "Terraform", "Git"],

  },
  {
    title: "Secure AWS Landing Zone",
    subtitle: "Terraform, AWS Organizations, IAM, Security Hub",
    description: [
      "Designed and implemented a secure, multi-account AWS Landing Zone using Terraform to establish a foundational cloud environment compliant with industry best practices.",
      "Automated the provisioning of core infrastructure, including a multi-account structure with AWS Organizations, centralized logging, and network segmentation using VPCs and Transit Gateway.",
      "Enforced security guardrails using Service Control Policies (SCPs) to restrict non-compliant actions and integrated AWS Security Hub and GuardDuty for centralized threat detection and compliance monitoring.",
    ],
    skills: ["Terraform", "AWS Organizations", "IAM", "Security Hub"],
    github: "https://github.com/aaliismail/secure-aws-landing-zone",
    
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 max-w-3xl mx-auto">
    {/* Subtitle with typewriter */}
    <div className="text-center mb-2">
      <span className="text-lg text-neutral-400 font-mono tracking-wide">
        <Typewriter
          words={["Featured"]}
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
    <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 font-ibm">
      Recent Work
    </h2>
    {/* Description */}
    <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
      Here are some of the projects I’ve worked on recently.
    </p>
    <div className="space-y-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

function ProjectCard({ project }: { project: Project }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-xl shadow-xl p-6 mb-8 transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-green-400 mb-1">{project.title}</h3>
        <div className="text-neutral-300 mb-2 font-semibold">{project.subtitle}</div>
        <ul className="list-disc list-inside pl-4 text-neutral-200 space-y-1 mb-4">
          {project.description.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <button
          onClick={() => setShowSkills((v) => !v)}
          className="flex items-center gap-1 text-green-400 border border-green-400 rounded px-2 py-0.5 text-xs font-mono mb-4 bg-neutral-800 hover:bg-neutral-700 transition"
        >
          <span>{showSkills ? "▲ Hide Skills" : "▼ View Skills"}</span>
        </button>
        {showSkills && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
            {project.skills.map((skill: string, i: number) => (
              <div
                key={i}
                className="flex items-center bg-neutral-800 text-green-400 border border-green-400 rounded-full px-4 py-2 font-mono text-sm"
              >
                <span className="mr-2 text-green-400">▸</span>
                {skill}
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 text-xl">
              {/* GitHub SVG */}
              <svg width="20" height="20" fill="none" stroke="currentColor" className="stroke-green-400"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-green-400 text-xl">
              {/* External Link SVG */}
              <svg width="20" height="20" fill="none" stroke="currentColor" className="stroke-green-400"><path d="M14 3h7v7"/><path d="M5 19l14-14"/></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;