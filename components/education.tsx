import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022-2026",
    location: "Jalandhar, Punjab",
  },
  {
    institution: "Delhi Public School",
    degree: "12th with Science — Percentage: 78%",
    period: "2021-2022",
    location: "Sambalpur, Odisha",
  },
  {
    institution: "St. Mary's Higher Secondary School",
    degree: "Matriculation — Percentage: 75%",
    period: "2019-2020",
    location: "Jharsuguda, Odisha",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/30"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:pl-4" : "md:pl-16 md:pr-4"
                  } pl-10 md:pl-0`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="h-6 w-6 text-primary mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edu.period}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
