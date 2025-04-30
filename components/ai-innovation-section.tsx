"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, LineChart, Database, Zap, BarChart3, AlertTriangle } from "lucide-react"

const AIInnovationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-purple-500" />,
      title: "Machine Learning",
      description: "Advanced anomaly detection algorithms identify patterns invisible to human operators",
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      title: "Data Smoothing",
      description: "Total variation smoothing techniques filter noise for clearer signal analysis",
    },
    {
      icon: <Database className="h-10 w-10 text-green-500" />,
      title: "100% Coverage",
      description: "Triggerless data collection ensures no events are missed in the power stream",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Predictive Analytics",
      description: "Forecasting models predict issues up to 72 hours before they occur",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-red-500" />,
      title: "Pattern Recognition",
      description: "Identifies recurring issues and suggests permanent infrastructure improvements",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-orange-500" />,
      title: "Early Warning System",
      description: "Automated alerts with severity classification and recommended actions",
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
    <section id="ai" ref={ref} className="py-8 sm:py-12 md:py-20 relative overflow-hidden min-h-screen">
      {/* Background code-like pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-xs leading-tight">
            {Array(50)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="whitespace-nowrap">
                  {Array(100)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                    ))}
                </div>
              ))}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">AI at the Core of PowerQ</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            Our platform leverages cutting-edge artificial intelligence to transform power quality monitoring and
            prediction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 rounded-xl p-4 sm:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">The PowerQ Dashboard</h3>
              <p className="text-sm sm:text-base text-foreground/70 mb-4">
                Our intuitive dashboard provides real-time insights into your power quality metrics, with AI-powered
                recommendations and predictive analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm sm:text-base">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <span>Real-time power quality visualization</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Predictive maintenance scheduling</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                  <span>Anomaly detection with AI explanations</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Historical data analysis and trends</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-background rounded-lg shadow-md overflow-hidden">
              <div className="p-3 sm:p-4 bg-blue-600 text-white flex justify-between items-center">
                <div className="font-medium text-sm sm:text-base">PowerQ Dashboard</div>
                <div className="flex space-x-2">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-muted p-2 sm:p-3 rounded-md">
                    <div className="text-xs text-foreground/70">Voltage</div>
                    <div className="text-base sm:text-lg font-semibold">240V</div>
                    <div className="h-2 w-full bg-muted-foreground/20 rounded-full mt-2">
                      <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-muted p-2 sm:p-3 rounded-md">
                    <div className="text-xs text-foreground/70">Stability</div>
                    <div className="text-base sm:text-lg font-semibold">95%</div>
                    <div className="h-2 w-full bg-muted-foreground/20 rounded-full mt-2">
                      <div className="h-full w-[95%] bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-2 sm:p-3 rounded-md mb-3 sm:mb-4">
                  <div className="text-xs text-foreground/70 mb-2">Power Quality Trend</div>
                  <div className="h-16 sm:h-20 flex items-end space-x-1">
                    {Array(24)
                      .fill(0)
                      .map((_, i) => {
                        const height = 30 + Math.random() * 70
                        return (
                          <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                        )
                      })}
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-2 sm:p-3 rounded-md">
                  <div className="flex items-center text-yellow-800 dark:text-yellow-200">
                    <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <div className="text-xs sm:text-sm font-medium">Potential voltage sag predicted in 48 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIInnovationSection
