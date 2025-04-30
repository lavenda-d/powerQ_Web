"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const teamMembers = [
    {
      name: "Opondo Broono",
      role: "Power Engineer",
      university: "Kenyatta University",
      image: "/broono.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },

    {
      name: "Lavenda Shipichira",
      role: "Data Scientist",
      university: "Kenyatta University",
      image: "/lavenda.png",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
   
    {
      name: "Team Member",
      role: "Domain Expert",
      university: "Kenyatta University",
      image: "/placeholder.svg?height=300&width=300",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
    <section id="team" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Meet the experts behind PowerQ&apos;s innovative technology and vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative w-full pt-[100%]">
                    <div className="absolute inset-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'contain', padding: '1rem' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2}
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex space-x-4">
                        <a
                          href={member.socialLinks.linkedin}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.socialLinks.twitter}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={member.socialLinks.github}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-foreground/70 mb-1">{member.role}</p>
                    <p className="text-sm text-foreground/50">{member.university}</p>
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
          <h3 className="text-2xl font-semibold mb-4">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30">
              <h4 className="font-medium mb-2">Data Scientists</h4>
              <p className="text-sm text-foreground/70">Experts in machine learning and predictive analytics</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30">
              <h4 className="font-medium mb-2">Power Engineers</h4>
              <p className="text-sm text-foreground/70">Specialists in electrical systems and grid infrastructure</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30">
              <h4 className="font-medium mb-2">Domain Experts</h4>
              <p className="text-sm text-foreground/70">
                Industry veterans with deep knowledge of Kenya&apos;s energy sector
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
