"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const SDGSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const sdgs = [
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description:
        "PowerQ improves energy reliability and efficiency, supporting access to affordable, reliable, sustainable and modern energy for all.",
      color: "from-yellow-500 to-yellow-400",
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description:
        "By reducing power outages, PowerQ promotes sustained economic growth and productive employment opportunities.",
      color: "from-red-500 to-red-400",
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description:
        "Our technology builds resilient infrastructure and promotes inclusive and sustainable industrialization.",
      color: "from-orange-500 to-orange-400",
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description:
        "PowerQ helps make cities and human settlements more inclusive, safe, resilient and sustainable through reliable power.",
      color: "from-green-500 to-green-400",
    },
    {
      number: 13,
      title: "Climate Action",
      description:
        "By optimizing energy usage and reducing waste, PowerQ contributes to combating climate change and its impacts.",
      color: "from-blue-500 to-blue-400",
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
    <section id="sdg" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supporting Sustainable Development Goals</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            PowerQ is committed to advancing the UN Sustainable Development Goals through our innovative energy
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sdgs.map((sdg, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${sdg.color} p-6 flex justify-center items-center`}>
                    <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-3xl">
                      {sdg.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      SDG {sdg.number}: {sdg.title}
                    </h3>
                    <p className="text-foreground/70">{sdg.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Impact Measurement</h3>
            <p className="text-foreground/70 mb-6">
              PowerQ regularly measures and reports on our contributions to these SDGs, ensuring our technology creates
              meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {sdgs.map((sdg, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`h-8 w-8 rounded-full bg-gradient-to-r ${sdg.color} flex items-center justify-center text-white font-bold text-xs mr-2`}
                  >
                    {sdg.number}
                  </div>
                  <div className="h-2 w-24 bg-muted-foreground/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${60 + Math.random() * 40}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${sdg.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SDGSection
