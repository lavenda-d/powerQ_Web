"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import ImpactSection from "@/components/impact-section"
import BusinessModelSection from "@/components/business-model-section"
import AIInnovationSection from "@/components/ai-innovation-section"
import TeamSection from "@/components/team-section"
import RegulatorySection from "@/components/regulatory-section"
import SDGSection from "@/components/sdg-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ModeToggle } from "@/components/mode-toggle"
import ScrollIndicator from "@/components/scroll-indicator"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  // Ensure hydration
  useEffect(() => {
    setMounted(true)

    // Add a loading animation
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0, 1, 0.8],
              }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            >
              PowerQ
            </motion.div>
          </motion.div>
        ) : (
          <div className="min-h-screen bg-white dark:bg-background">
            <ScrollIndicator />
            <Navbar />
            <main>
              <HeroSection />
              <SectionDivider />
              <ProblemSection />
              <SectionDivider light />
              <SolutionSection />
              <SectionDivider />
              <ImpactSection />
              <SectionDivider light />
              <BusinessModelSection />
              <SectionDivider />
              <AIInnovationSection />
              <SectionDivider light />
              <TeamSection />
              <SectionDivider />
              <RegulatorySection />
              <SectionDivider light />
              <SDGSection />
              <SectionDivider />
              <ContactSection />
            </main>
            <Footer />
            <div className="fixed bottom-4 right-4 z-50">
              <ModeToggle />
            </div>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
