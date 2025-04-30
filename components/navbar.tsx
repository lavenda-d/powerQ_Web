"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll("section")
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          current = `#${section.id}`
        }
      })
      setActiveLink(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Impact", href: "#impact" },
    { name: "Business", href: "#business" },
    { name: "AI", href: "#ai" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
      setActiveLink(href)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="flex items-center"
        >
          <motion.span 
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 8px rgb(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent cursor-pointer"
          >
            PowerQ
          </motion.span>
        </motion.div>

        {/* Desktop Navigation with enhanced animations */}
        <nav className="hidden md:flex items-center space-x-1 relative z-10">
          {navLinks.map((link, index) => (
            <motion.div 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index + 0.3,
                type: "spring",
                stiffness: 150
              }}
              onHoverStart={() => setHoverIndex(index)}
              onHoverEnd={() => setHoverIndex(null)}
              className="relative"
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative overflow-hidden ${
                  activeLink === link.href 
                    ? "text-foreground" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <motion.span
                  animate={{ 
                    y: 0,
                    opacity: 1,
                    scale: hoverIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {link.name}
                </motion.span>
                {activeLink === link.href && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.span
                  className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 transition-opacity"
                  animate={{ opacity: hoverIndex === index ? 0.1 : 0 }}
                />
              </a>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
          >
            <Button
              variant="default"
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 hover:from-blue-700 hover:via-purple-600 hover:to-teal-600 shadow-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="relative z-10">Request Demo</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.4 }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden relative z-50">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative group"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180, scale: 1.1 },
                closed: { rotate: 0, scale: 1 }
              }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
            />
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { 
                opacity: { duration: 0.3 },
                height: { type: "spring", bounce: 0.2, duration: 0.6 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                opacity: { duration: 0.2 },
                height: { duration: 0.3 }
              }
            }}
            className="md:hidden bg-background/95 dark:bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          >
            <motion.div 
              className="container mx-auto px-4 py-4 flex flex-col space-y-2"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      type: "spring",
                      stiffness: 150,
                      delay: index * 0.1
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: -20,
                    transition: {
                      duration: 0.2
                    }
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeLink === link.href
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "hover:bg-blue-500/5 text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: navLinks.length * 0.1,
                    type: "spring",
                    stiffness: 150
                  }
                }}
                className="pt-2"
              >
                <Button
                  variant="default"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 hover:from-blue-700 hover:via-purple-600 hover:to-teal-600 shadow-lg"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar