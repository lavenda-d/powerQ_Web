"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import emailjs from '@emailjs/browser'
import { toast } from "sonner"

const ContactSection = () => {
  const ref = useRef(null)
  const form = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init({
      publicKey: 'f9RmFJdLZ2740uOHu',
    })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsSubmitting(true)
      
      // Create the template parameters
      const templateParams = {
        email: formData.email,
        name: formData.name,
        title: 'New Contact Form Submission',
        message: formData.message
      }

      console.log('Attempting to send email with params:', templateParams)

      // First, verify the service connection
      console.log('Using Gmail service: service_bqz797r')
      console.log('Using template: template_wyfo3sy')

      const result = await emailjs.send(
        'service_bqz797r',
        'template_wyfo3sy',
        templateParams,
        'f9RmFJdLZ2740uOHu'
      )

      console.log('EmailJS response:', result)

      if (result.text === 'OK') {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        toast.success("Thank you! Your message has been sent successfully.")
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error: any) {
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        name: error.name,
        stack: error.stack,
        error
      })
      
      let errorMessage = "Unable to send message."
      
      if (error.text?.includes('authentication')) {
        errorMessage = "Email service needs to be reconnected. Please try again in a few minutes while we fix this issue."
        // Log specific authentication error
        console.error('Gmail authentication error. Please check service connection.')
      } else if (error.text?.includes('412')) {
        errorMessage = "Email service configuration issue. Please try again in a few minutes."
        // Log specific configuration error
        console.error('Service configuration error:', error.text)
      }
      
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-blue-500" />,
      title: "Email",
      value: "info@powerq.com",
      link: "mailto:info@powerq.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-green-500" />,
      title: "Phone",
      value: "+254 717052939",
      link: "tel:+254717052939",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your power quality monitoring? Get in touch with our team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <a
                          href={info.link}
                          className="text-foreground/70 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Join the Energy Revolution</h4>
                  <p className="text-foreground/70 mb-4">
                    Partner with PowerQ to be part of Kenya's sustainable energy future. Together, we can build a more
                    reliable and efficient power infrastructure.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 tooltip relative z-[10000] pointer-events-auto"
                      data-tooltip="Open partnership form"
                      onClick={() => {
                        // In a real app, this would open a partnership form or modal
                        alert(
                          "Partnership form would open here. This would allow you to submit your organization details to become a PowerQ partner.",
                        )
                      }}
                    >
                      Partner with Us
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 relative z-[10000] pointer-events-auto"
                      onClick={() => {
                        document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/30 p-8 rounded-lg text-center h-[350px] flex flex-col items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-foreground/70 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-[10000]">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="relative z-[10000] pointer-events-auto"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="relative z-[10000] pointer-events-auto"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="relative z-[10000] pointer-events-auto"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 button-hover relative z-[10000] pointer-events-auto"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      <motion.span
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
