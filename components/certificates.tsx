import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL Swayam",
    period: "Jul 2024 – Oct 2024",
    link: "#",
  },
  {
    title: "Full Stack using Java",
    issuer: "IBM",
    period: "Jun 2024- Jul 2024",
    link: "#",
  },
  {
    title: "Server-side JavaScript with Node.js",
    issuer: "Coursera",
    period: "Apr 2024- May 2024",
    link: "#",
  },
  {
    title: "Data Structure and Algorithms",
    issuer: "Udemy",
    period: "Aug 2023- Dec 2023",
    link: "#",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{cert.period}</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
