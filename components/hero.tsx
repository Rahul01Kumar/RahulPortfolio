'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const heroRef = useRef(null)
  const roles = ["Full Stack Developer", "Web Designer", "Team Leader", "Problem Solver"]
  
  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/specialized.pdf'
    link.download = 'Rahul_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className={`transition-all duration-500 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
               <span className="text-primary">Rahul Kumar</span>
              </h1>
              
              <div className="h-16 md:h-20 mt-4 relative">
                {roles.map((role, index) => (
                  <h2
                    key={role}
                    className={`absolute text-xl md:text-2xl text-gray-600 dark:text-gray-300 transition-all duration-500 ${
                      currentRole === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                  >
                    {role}
                  </h2>
                ))}
              </div>

              <p className={`text-gray-600 dark:text-gray-300 text-lg mt-6 max-w-lg transition-all duration-500 delay-100 ${
                isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                Building seamless digital experiences with modern web technologies.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 transition-all duration-500 delay-200 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Button asChild className="hover:scale-105 transition-transform">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button 
                variant="outline" 
                className="hover:scale-105 transition-transform"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            <div className={`flex items-center gap-4 pt-4 transition-all duration-500 delay-300 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                <Link
                  href="https://github.com/Rahul01Kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                <Link
                  href="https://linkedin.com/in/rahul-kumar111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                <Link
                  href="mailto:kumar.28rahul10@gmail.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className={`w-full md:w-1/2 flex justify-center transition-all duration-500 delay-300 ${
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/images/img21.png"
                alt="Rahul Kumar"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full pulse-animation"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 float-animation"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 float-animation-delay"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full scroll-indicator-dot"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .float-animation-delay {
          animation: float 6s ease-in-out infinite 1.5s;
        }
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
        .scroll-indicator {
          animation: bounce 2s ease-in-out infinite;
        }
        .scroll-indicator-dot {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}