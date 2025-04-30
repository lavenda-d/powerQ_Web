"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, TrendingUp } from "lucide-react"

const BusinessModelSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const tiers = [
    {
      name: "Economic Tier",
      price: "KES 100,000",
      description: "Perfect for SMEs, clinics, and schools",
      features: [
        "Basic power quality monitoring",
        "24-hour prediction window",
        "Email alerts for potential issues",
        "Monthly reporting",
        "Basic technical support",
      ],
      color: "border-blue-500 hover:border-blue-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Business Tier",
      price: "KES 500,000",
      description: "Ideal for counties & industries",
      features: [
        "Advanced power quality monitoring",
        "72-hour prediction window",
        "Real-time alerts via SMS, email, and app",
        "Weekly detailed analytics",
        "24/7 priority technical support",
        "Custom integration with existing systems",
        "Dedicated account manager",
      ],
      color: "border-teal-500 hover:border-teal-600",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
      featured: true,
    },
  ]

  const growthData = [
    { year: "Year 1", amount: "KES 5M" },
    { year: "Year 3", amount: "KES 25M" },
    { year: "Year 5", amount: "KES 80M" },
  ]

  return (
    <section id="business" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Model</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            PowerQ offers flexible pricing tiers to meet the needs of different organizations across Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`h-full transition-all duration-300 hover:shadow-lg ${
                  tier.featured
                    ? "border-2 " + tier.color + " shadow-md"
                    : "border border-border hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold mt-2">{tier.price}</div>
                  <p className="text-foreground/70 mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 w-full py-2 rounded-md text-white ${tier.buttonColor} transition-colors duration-300 relative z-[10000] pointer-events-auto`}
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Get Started with {tier.name}
                    </motion.span>
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/50 rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-green-500" />
                Growth Projections
              </h3>
              <p className="text-foreground/70 mb-6 max-w-md">
                PowerQ is positioned for significant growth as we expand our services across Kenya and eventually to
                neighboring countries.
              </p>
              <div className="space-y-4">
                {growthData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 font-medium">{item.year}:</div>
                    <div className="font-bold text-lg">{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-background rounded-lg shadow-inner p-4">
              <div className="w-full h-full relative">
                {growthData.map((item, index) => {
                  const height = index === 0 ? "20%" : index === 1 ? "50%" : "90%"
                  return (
                    <motion.div
                      key={index}
                      initial={{ height: "0%" }}
                      animate={isInView ? { height } : { height: "0%" }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                      className={`absolute bottom-0 rounded-t-md ${
                        index === 0
                          ? "left-[20%] w-[15%] bg-blue-500"
                          : index === 1
                            ? "left-[42.5%] w-[15%] bg-teal-500"
                            : "left-[65%] w-[15%] bg-green-500"
                      }`}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium">
                        {item.amount}
                      </div>
                    </motion.div>
                  )
                })}
                <div className="absolute bottom-0 w-full h-[1px] bg-border"></div>
                <div className="absolute bottom-2 left-[20%] transform -translate-x-1/2 text-xs text-foreground/70">
                  Year 1
                </div>
                <div className="absolute bottom-2 left-[50%] transform -translate-x-1/2 text-xs text-foreground/70">
                  Year 3
                </div>
                <div className="absolute bottom-2 left-[80%] transform -translate-x-1/2 text-xs text-foreground/70">
                  Year 5
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessModelSection
