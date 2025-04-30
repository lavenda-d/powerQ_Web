"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Banknote, TrendingDown, Clock, Leaf, Target } from "lucide-react"

const ImpactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const impacts = [
    {
      icon: <Banknote className="h-12 w-12 text-green-500" />,
      title: "KES 3M",
      description: "Saved annually by businesses using PowerQ",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-blue-500" />,
      title: "25%",
      description: "Reduction in utility maintenance costs",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-500" />,
      title: "40%",
      description: "Reduction in outage durations across the grid",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Leaf className="h-12 w-12 text-teal-500" />,
      title: "Carbon Reduction",
      description: "Lower emissions through optimized energy usage",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Target className="h-12 w-12 text-red-500" />,
      title: "SDG Support",
      description: "Contributing to SDGs 7, 8, 9, 11 & 13",
      color: "from-red-500 to-orange-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="impact" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            PowerQ is transforming Kenya&apos;s energy landscape with measurable, significant results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {impacts.map((impact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${impact.color} p-6 flex justify-center`}>
                    <div className="bg-white/20 p-4 rounded-full">{impact.icon}</div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
                    <p className="text-foreground/70">{impact.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection
