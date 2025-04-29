"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Simple SVG icons
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const projects = [
  {
    title: "Astech Engineering Works",
    period: "March 2025 - April 2025",
    link: "https://github.com/Rahul01Kumar/Astechpro.git", 
    link1: "https://astech-ew.vercel.app/",
    tech: ["Laravel(PHP)", "MongoDB", "BootStrap"],
    tools: ["VS Code", "MongoDB Atlas", "Git/GitHub"],
    features: [
      "Developed secure admin dashboard with full CRUD functionality for managing products/services",
      "Reduced admin workload by 40% by automating content updates.",
      "Built file upload system with Laravel's filesystem",
      "Automated content synchronization between admin panel and live website",
    ],
    image: "/images/aew.jpg",
  },

  {
    title: "Event Registration",
    period: "March 2025 - April 2025",
    link: "https://github.com/Rahul01Kumar/blogplatform.git", 
    link1: "https://pradyutfoundation.org/",
    tech: ["Node.js", "MongoDB", "Razorpay API", "React"],
    tools: ["VS Code", "MongoDB Atlas", "Git/GitHub"],
    features: [
      "Secure registration with form validation and Razorpay integration",
      "Admin dashboard with CRUD functionality",
      "File upload system for participants",
      "Custom database schemas and RESTful APIs",
    ],
    image: "/images/tts.jpg",
  },
  {
    title: "Library Management System",
    period: "Sept 2024 – Nov 2024",
    link: "https://github.com/Rahul01Kumar/Library_Management_System.git",
    link1: "https://library-management-system-khaki-mu.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    tools: ["VS Code", "XAMPP", "Apache", "phpMyAdmin", "GitHub"],
    features: [
      "Book availability checking and management",
      "Reduced login errors by 60%",
      "40% increase in user engagement",
      "Automated overdue book tracking",
    ],
    image: "/images/placeholder1.jpg",
  },
  {
    title: "Construction Website",
    period: "Mar 2024-Apr 2024",
    link: "https://github.com/Rahul01Kumar/Construction_website/tree/main/form",
    link1: "https://rohitconstt.onrender.com/",
    tech: ["HTML", "CSS", "JavaScript", "Nodejs", "MongoDB"],
    tools: ["VS Code", "Express.js", "GitHub"],
    features: [
      "30% increase in client inquiries",
      "Seamless employer-newcomer communication",
      "Fully responsive design",
      "Project gallery with filters",
    ],
    image: "/images/const.jpg",
  },
  {
    title: "Soil Pollution Website",
    period: "Mar 2023-Apr 2023",
    link: "https://github.com/Rahul01Kumar/Soil_Pollution.git",
    link1: "https://rahul01kumar.github.io/Project.github.io/",
    tech: ["HTML", "CSS", "JavaScript"],
    tools: ["VS Code", "GitHub"],
    features: [
      "Educational resource on soil pollution",
      "Responsive cross-device design",
      "User-friendly navigation",
      "Interactive data visualizations",
    ],
    image: "/images/soilpoll.jpg",
  },
];

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section id="projects" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 h-full">
                <div className="h-64 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        {/* Mobile - Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex space-x-6 w-max px-4">
            {projects.map((project, index) => (
              <div key={index} className="w-[85vw] flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Project Image with visible icons */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            aria-label="View code on GitHub"
          >
            <GithubIcon />
          </Link>
          {project.link1 && (
            <Link 
              href={project.link1} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="View live demo"
            >
              <ExternalLinkIcon />
            </Link>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.period}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Tools:</span> {project.tools.join(", ")}
          </p>
        </div>

        <div className="space-y-2 flex-1">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Key Features:
          </h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 pt-4">
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <GithubIcon className="mr-2" />
            Code
          </Link>
          {project.link1 && (
            <Link 
              href={project.link1} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <ExternalLinkIcon className="mr-2" />
              Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}