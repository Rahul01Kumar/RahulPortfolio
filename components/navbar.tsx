"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleDownload = () => {
    try {
      const link = document.createElement('a')
      link.href = '/images/specialized.pdf' 
      link.download = 'Rahul_Kumar_Resume.pdf' 
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Optional: Add analytics tracking here
      console.log('Resume downloaded')
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Optionally show an error toast/message to the user
    }
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Rahul<span className="text-primary"> Kumar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                scroll={false}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                  scroll={false}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Resume
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}