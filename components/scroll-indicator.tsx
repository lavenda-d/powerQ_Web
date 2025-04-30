"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 h-1 bg-muted z-50"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 to-teal-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </motion.div>
  )
}

export default ScrollIndicator
