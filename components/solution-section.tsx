"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Zap, LineChart, Bell } from "lucide-react"

const SolutionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const features = [
    {
      icon: <Activity className="h-10 w-10 text-blue-500" />,
      title: "Real-Time Monitoring",
      description: "Track power quality metrics in real-time with our advanced sensors",
      color: "blue",
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent"
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Predictive Analytics",
      description: "AI-powered predictions to prevent power issues before they occur",
      color: "yellow",
      gradient: "from-yellow-500/20 via-yellow-500/10 to-transparent"
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-500" />,
      title: "Data Collection",
      description: "Comprehensive data gathering for informed decision making",
      color: "green",
      gradient: "from-green-500/20 via-green-500/10 to-transparent"
    },
    {
      icon: <Bell className="h-10 w-10 text-purple-500" />,
      title: "Smart Alerts",
      description: "Instant notifications for power anomalies and potential issues",
      color: "purple",
      gradient: "from-purple-500/20 via-purple-500/10 to-transparent"
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
    <section id="solution" ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
            Our Solution: Smart Power Quality Monitoring
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            PowerQ combines advanced hardware with AI-driven analytics to revolutionize power quality monitoring.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              <Card className="h-full border-none shadow-lg transition-all duration-500 overflow-hidden bg-white/5 dark:bg-background/5 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[var(--color)] relative">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br"
                  style={{ 
                    background: `radial-gradient(circle at center, var(--${feature.color}-500), transparent)`,
                    opacity: 0.05
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <CardContent className="p-6 flex flex-col items-center text-center relative">
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm shadow-inner relative overflow-hidden group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ 
                        background: `radial-gradient(circle at center, var(--${feature.color}-500), transparent)`
                      }}
                    />
                    {feature.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                    initial={false}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `linear-gradient(to right, var(--${feature.color}-500), transparent)`
                    }}
                    initial={false}
                    animate={{
                      scaleX: [0, 1],
                      transition: { duration: 0.5 }
                    }}
                  />
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
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Our comprehensive solution empowers businesses and institutions to take control of their power quality,
            reducing downtime and improving efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
