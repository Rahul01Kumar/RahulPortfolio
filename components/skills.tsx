import { Code, Database, Globe, Cpu, GitBranch } from "lucide-react"

const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "PHP", "SQL"],
    icon: <Code className="h-8 w-8 text-primary" />,
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "React JS", "Node JS", "Express.js"],
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "XAMPP", "Apache"],
    icon: <GitBranch className="h-8 w-8 text-primary" />,
  },
]

const softSkills = ["Leadership", "Problem Solving", "Adaptability", "Communication", "Teamwork"]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        {/* Technical Skills - Horizontal Scroll on Mobile */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Cpu className="h-6 w-6 text-primary mr-2" />
            Technical Skills
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    {skillGroup.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">{skillGroup.category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <div key={idx} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills - Horizontal Scroll on Mobile */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Cpu className="h-6 w-6 text-primary mr-2" />
            Soft Skills
          </h3>
          <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-3 md:grid md:grid-cols-5 md:gap-3">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium text-center hover:bg-primary/20 transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}