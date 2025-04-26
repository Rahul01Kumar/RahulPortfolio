'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const handleDownload = () => {
    window.open('/Specialized.pdf', '_blank')
  }

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-primary">Rahul Kumar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Computer Science Engineering Student
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Passionate about building web applications and solving complex problems. Currently pursuing Computer
              Science Engineering at Lovely Professional University.
            </p>
            <div className="flex flex-wrap gap-4">
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
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://github.com/Rahul01Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/rahul-kumar111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kumar.28rahul10@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors hover:scale-110"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-20"></div>
              <Image
                src="/images/img2.png"
                alt="Rahul Kumar"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
    </section>
  )
}
