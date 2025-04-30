"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  light?: boolean
}

const SectionDivider = ({ light = false }: SectionDividerProps) => {
  return (
    <div className="relative h-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`absolute inset-x-0 bottom-0 h-16 ${
          light ? "bg-muted/10" : "bg-background/95"
        } -skew-y-3 transform origin-bottom-right z-10 backdrop-blur-sm`}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className={`absolute inset-x-0 bottom-0 h-16 ${
          light ? "bg-background/95" : "bg-muted/10"
        } -skew-y-3 transform origin-bottom-left z-0 backdrop-blur-sm`}
      />
    </div>
  )
}

export default SectionDivider
