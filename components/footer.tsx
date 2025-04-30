"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  }

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center relative z-[10000] pointer-events-auto"
        >
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">About Us</h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              PowerQ is your trusted partner in energy monitoring and management
              solutions.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              {[
                { icon: Twitter, href: "https://twitter.com/powerq", color: "hover:text-blue-400" },
                { icon: Facebook, href: "https://facebook.com/powerq", color: "hover:text-blue-600" },
                { icon: Linkedin, href: "https://linkedin.com/company/powerq", color: "hover:text-blue-700" }
              ].map((social, index) => (
                <motion.div
                  key={social.href}
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="relative group"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground ${social.color} transition-colors cursor-pointer`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                  <motion.span
                    className="absolute -inset-2 rounded-full bg-white/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our solution", href: "/solution" },
                { name: "Business Model", href: "/business" },
                { name: "Impact", href: "/impact" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer relative group flex items-center justify-center md:justify-start"
                  >
                    <span>{link.name}</span>
                    <motion.span
                      className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "info@powerq.com" },
                { icon: Phone, text: "+254 71705239" },
                { icon: MapPin, text: "kenyatta University" }
              ].map((item, index) => (
                <motion.p
                  key={item.text}
                  className="text-sm text-muted-foreground flex items-center justify-center md:justify-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="p-2 rounded-full bg-muted/50 group-hover:bg-muted transition-colors">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="group-hover:text-foreground transition-colors">{item.text}</span>
                </motion.p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/70 text-sm mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} PowerQ. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer relative z-[10000] pointer-events-auto group"
              >
                <span>{link.name}</span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"
                  initial={false}
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-teal-600 transition-all z-[10000] pointer-events-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ 
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
