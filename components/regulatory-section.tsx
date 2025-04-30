"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, FileCheck, Award } from "lucide-react"

const RegulatorySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const complianceItems = [
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "EPRA Compliant",
      description: "Fully compliant with Energy and Petroleum Regulatory Authority standards",
    },
    {
      icon: <Lock className="h-10 w-10 text-green-500" />,
      title: "Data Security",
      description: "Enterprise-grade encryption and security protocols for all data",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-purple-500" />,
      title: "Legal Framework",
      description: "Operating within Kenya's energy regulatory framework and policies",
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      title: "Certified Technology",
      description: "Our technology meets international standards for power quality monitoring",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="regulatory" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Regulatory Compliance</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            PowerQ adheres to all relevant regulatory standards and security protocols to ensure reliable and compliant
            operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {complianceItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 border border-border rounded-lg bg-muted/30"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-1/4 flex justify-center">
              <div className="h-32 w-32 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Shield className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-4">Our Commitment to Compliance</h3>
              <p className="text-foreground/70 mb-4">
                At PowerQ, we understand the importance of regulatory compliance in the energy sector. Our technology is
                designed to meet and exceed all relevant standards, ensuring that our clients can trust in the
                reliability and legality of our solutions.
              </p>
              <p className="text-foreground/70">
                We work closely with regulatory bodies to stay updated on changing requirements and continuously improve
                our compliance measures.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RegulatorySection
