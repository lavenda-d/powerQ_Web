"use client"

import { useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Building } from "lucide-react"

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const problems = [
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "7+ Hours",
      description: "Of power outages weekly across Kenya",
      color: "amber",
      particles: Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2
      }))
    },
    {
      icon: <DollarSign className="h-10 w-10 text-red-500" />,
      title: "KES 120B",
      description: "Lost annually in productivity due to unreliable power",
      color: "red",
      particles: Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2
      }))
    },
    {
      icon: <Building className="h-10 w-10 text-blue-500" />,
      title: "Critical Disruptions",
      description: "Hospitals, schools, and factories suffer serious setbacks",
      color: "blue",
      particles: Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2
      }))
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
      title: "Unpredictable",
      description: "No warning systems for impending power issues",
      color: "yellow",
      particles: Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 3 + 2
      }))
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  }

  return (
    <section id="problem" ref={ref} className="py-24 bg-gradient-to-b from-muted/50 to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/5 to-transparent opacity-50" />
      
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           Unreliable Power is Costing Us
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kenya&apos;s energy infrastructure faces significant challenges that impact businesses, institutions, and
            everyday life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="relative group"
            >
              <Card className="h-full border-none shadow-lg transition-all duration-500 overflow-hidden bg-white/10 dark:bg-background/10 backdrop-blur-lg group-hover:shadow-2xl group-hover:shadow-[var(--color)] relative transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-all duration-700"
                     style={{ 
                       background: `radial-gradient(circle at center, var(--${problem.color}-500), transparent)`,
                     }} 
                />
                {problem.particles.map((particle) => (
                  <motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-current opacity-30"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      x: `${particle.x}%`,
                      y: `${particle.y}%`,
                      color: `var(--${problem.color}-500)`
                    }}
                    animate={{
                      x: [`${particle.x}%`, `${particle.x + (Math.random() * 30 - 15)}%`],
                      y: [`${particle.y}%`, `${particle.y + (Math.random() * 30 - 15)}%`],
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="mb-6 p-4 rounded-full bg-background/50 backdrop-blur-sm shadow-inner relative overflow-hidden group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      boxShadow: `0 0 30px var(--${problem.color}-500)`
                    }}
                    transition={{ 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                      style={{ 
                        background: `radial-gradient(circle at center, var(--${problem.color}-500), transparent)`
                      }}
                    />
                    {problem.icon}
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative group-hover:scale-110 transition-transform duration-500"
                  >
                    <CountUp target={problem.title} className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" />
                  </motion.div>
                  <motion.p 
                    className="text-foreground/70 relative z-10 group-hover:text-foreground transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {problem.description}
                  </motion.p>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    style={{
                      background: `linear-gradient(to right, var(--${problem.color}-500), transparent)`
                    }}
                    initial={false}
                    animate={{
                      scaleX: [0, 1],
                      transition: { duration: 0.5 }
                    }}
                  />

                  {/* Enhanced floating elements on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: Math.random() * 8 + 3,
                          height: Math.random() * 8 + 3,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          backgroundColor: `var(--${problem.color}-500)`,
                          opacity: 0.3
                        }}
                        animate={{
                          y: [0, Math.random() * 30 - 15],
                          x: [0, Math.random() * 30 - 15],
                          scale: [1, 1.8, 1],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Enhanced glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at center, var(--${problem.color}-500) 0%, transparent 70%)`,
                      filter: 'blur(30px)'
                    }}
                    initial={false}
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />

                  {/* Add a pulsing border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      boxShadow: `0 0 30px var(--${problem.color}-500)`,
                    }}
                    initial={false}
                    animate={{
                      boxShadow: [
                        `0 0 30px var(--${problem.color}-500)`,
                        `0 0 50px var(--${problem.color}-500)`,
                        `0 0 30px var(--${problem.color}-500)`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.p 
            className="text-lg text-foreground/80 max-w-3xl mx-auto bg-white/5 dark:bg-background/5 p-6 rounded-lg backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Without reliable power, Kenya&apos;s economic growth is stunted, and essential services are compromised.
            PowerQ is here to change that.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

const CountUp = ({ target, className }: { target: string; className?: string }) => {
  return (
    <motion.h3 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {target}
    </motion.h3>
  )
}

export default ProblemSection
