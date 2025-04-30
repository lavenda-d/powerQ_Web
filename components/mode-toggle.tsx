"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  // Ensure hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = (newTheme: string) => {
    setShowAnimation(true)
    setTheme(newTheme)
    setTimeout(() => setShowAnimation(false), 1000)
  }

  return (
    <>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 100 }}
            transition={{ duration: 0.8 }}
            className={`h-10 w-10 rounded-full fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ${
              theme === "dark" ? "bg-background" : "bg-background"
            }`}
          />
        </motion.div>
      )}

      <div className="tooltip" data-tooltip="Change theme (Light/Dark/System)">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-800 shadow-lg">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: showAnimation ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
              </motion.div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border-none shadow-lg">
            <DropdownMenuItem
              onClick={() => toggleTheme("light")}
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Sun className="h-4 w-4 mr-2 text-yellow-500" /> Light Mode
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => toggleTheme("dark")}
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Moon className="h-4 w-4 mr-2 text-blue-400" /> Dark Mode
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => toggleTheme("system")}
              className="hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Monitor className="h-4 w-4 mr-2 text-gray-500" /> Use Device Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
