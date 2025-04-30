"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const generateParticles = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const particleCount = Math.min(Math.floor((windowWidth * windowHeight) / 40000), 30)

      const newParticles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        const lightModeColors = [
          "rgba(59, 130, 246, 0.3)", // blue
          "rgba(20, 184, 166, 0.3)", // teal
          "rgba(99, 102, 241, 0.3)", // indigo
          "rgba(236, 72, 153, 0.2)", // pink
        ]

        const darkModeColors = [
          "rgba(59, 130, 246, 0.15)", // blue
          "rgba(20, 184, 166, 0.15)", // teal
          "rgba(99, 102, 241, 0.15)", // indigo
          "rgba(236, 72, 153, 0.1)", // pink
        ]

        const colors = theme === "dark" ? darkModeColors : lightModeColors

        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        })
      }

      setParticles(newParticles)
    }

    generateParticles()

    window.addEventListener("resize", generateParticles)
    return () => window.removeEventListener("resize", generateParticles)
  }, [theme])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: "blur(8px)",
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
