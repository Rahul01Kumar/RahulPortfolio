import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              I am a Computer Science Engineering student at Lovely Professional University, passionate about web
              development and software engineering. With a strong foundation in programming languages like C++, Java,
              Python, and JavaScript, I enjoy building applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              My journey in tech has led me to work on various projects, from library management systems to construction
              websites, where I've honed my skills in both frontend and backend development. I'm constantly learning and
              exploring new technologies to expand my knowledge and capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Details</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Rahul Kumar</li>
                  <li>Punjab, India</li>
                  <li>+91-7609992754</li>
                  <li>kumar.28rahul10@gmail.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personal Info</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Interests:</span> Web Development, Problem Solving
                  </li>
                  <li>
                    <span className="font-medium">Study:</span> Computer Science
                  </li>
                  <li>
                    <span className="font-medium">Degree:</span> B.Tech (2022-2026)
                  </li>
                </ul>
              </div>
            </div>
            <Button asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-3"></div>
              <img
                src="/images/img2.png?height=400&width=600"
                alt="About Rahul Kumar"
                className="relative z-10 rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
