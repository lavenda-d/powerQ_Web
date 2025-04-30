"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  name: string;
  role: string;
  university: string;
  image: string;
  socialLinks: {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const teamMembers: TeamMember[] = [
    {
      name: "Opondo Broono",
      role: "Power Engineer",
      university: "Kenyatta University",
      image: "/broono.png",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/powerq-ke",
          icon: Linkedin
        },
        {
          name: "Twitter",
          url: "https://twitter.com/powerq_ke",
          icon: Twitter
        },
        {
          name: "GitHub",
          url: "https://github.com/powerq-ke",
          icon: Github
        }
      ]
    },

   
    {
      name: "Irene Chebet Korir",
      role: "Domain Expert",
      university: "Kenyatta University",
      image: "/irene.png",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/powerq-ke",
          icon: Linkedin
        },
        {
          name: "Twitter",
          url: "https://twitter.com/powerq_ke",
          icon: Twitter
        },
        {
          name: "GitHub",
          url: "https://github.com/powerq-ke",
          icon: Github
        }
      ]
    },

    
    {
      name: "Lavenda Shipichira",
      role: "Data Scientist",
      university: "Kenyatta University",
      image: "/lavenda.png",
      socialLinks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/powerq-ke",
          icon: Linkedin
        },
        {
          name: "Twitter",
          url: "https://twitter.com/powerq_ke",
          icon: Twitter
        },
        {
          name: "GitHub",
          url: "https://github.com/powerq-ke",
          icon: Github
        }
      ]
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
    <section id="team" ref={ref} className="py-8 sm:py-12 md:py-20 relative overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            Our team combines expertise in power systems, AI, and software development to create innovative
            solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square w-full bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain p-2 sm:p-4 md:p-6"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                  quality={100}
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg?height=300&width=300";
                  }}
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    backgroundColor: 'var(--muted)',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-primary mb-2">{member.role}</p>
                <p className="text-xs sm:text-sm text-foreground/70 mb-4">{member.university}</p>
                <div className="flex space-x-3 sm:space-x-4 relative z-50">
                  {member.socialLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
                      className="relative z-50 inline-flex items-center justify-center w-8 h-8 rounded-full text-foreground/70 hover:text-primary hover:bg-muted transition-all duration-200 cursor-pointer pointer-events-auto"
                      aria-label={`Visit ${member.name}'s ${link.name} profile`}
                    >
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30">
              <h4 className="font-medium mb-2 text-sm sm:text-base">Data Scientists</h4>
              <p className="text-xs sm:text-sm text-foreground/70">Experts in machine learning and predictive analytics</p>
            </div>
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30">
              <h4 className="font-medium mb-2 text-sm sm:text-base">Power Engineers</h4>
              <p className="text-xs sm:text-sm text-foreground/70">Specialists in electrical systems and grid infrastructure</p>
            </div>
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30">
              <h4 className="font-medium mb-2 text-sm sm:text-base">Domain Experts</h4>
              <p className="text-xs sm:text-sm text-foreground/70">
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
