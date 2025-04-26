import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Library Management System",
    period: "Sept 2024 – Nov 2024",
    link: "https://github.com/Rahul01Kumar/Library_Management_System.git",
    link1: "https://library-management-system-khaki-mu.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    tools: ["VS Code", "XAMPP", "Apache", "phpMyAdmin", "GitHub"],
    features: [
      "Developed a fully functional website enabling students to check book availability, issue, and return books through the portal.",
      "Developed a robust backend for real-time data and user authentication, cutting login errors by 60% and improving library access reliability.",
      "Crafted an intuitive interface that seamlessly adjusts across mobile and desktop platforms, resulting in a 40% increase in user engagement",
    ],
    image: "/images/placeholder1.jpg?height=300&width=500",
  },
  {
    title: "Construction Website",
    period: "Mar 2024-Apr 2024",
    link: "https://github.com/Rahul01Kumar/Construction_website/tree/main/form",
    link1: "https://rohitconstt.onrender.com/",
    tech: ["HTML", "CSS", "JavaScript", "Nodejs", "MongoDB"],
    tools: ["VS Code", "Express.js", "GitHub"],
    features: [
      "Designed a dynamic construction website with tailored services and project portfolios, boosting client inquiries by 30%.",
      "Integrated a backend system enabling seamless communication between newcomers and employers.",
      "Developed a responsive construction web platform for seamless cross-device navigation.",
    ],
    image: "/images/const.jpg?height=300&width=500",
  },
  {
    title: "Soil Pollution Website",
    period: "Mar 2023-Apr 2023",
    link: "https://github.com/Rahul01Kumar/Soil_Pollution.git",
    link1: "https://rahul01kumar.github.io/Project.github.io/",
    tech: ["HTML", "CSS", "JavaScript"],
    tools: ["VS Code", "GitHub"],
    features: [
      "Developed an educational website providing essential information on soil pollution, including soil types, pollution causes, and environmental impacts.",
      "Designed a fully responsive interface for seamless accessibility across all devices.",
      "Implemented user-friendly navigation to enhance the browsing experience.",
    ],
    image: "/images/soilpoll.jpg?height=300&width=500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button size="icon" variant="secondary" asChild>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </Link>
                      </Button>
                      <Button size="icon" variant="secondary" asChild>
                        <Link href={project.link1} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Tools:</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.tools.join(", ")}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-4">
                  <Button asChild>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                
                  {project.link1 && (
                    <Button asChild variant="outline">
                      <Link href={project.link1} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Deployed Link
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}