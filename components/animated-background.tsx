"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create electrical nodes
    const nodeCount = Math.floor((canvas.width * canvas.height) / 5000)
    const nodes: {
      x: number
      y: number
      radius: number
      energy: number
      connections: number[]
    }[] = []

    // Create power source nodes (fewer, more energetic)
    const powerSources = 3
    for (let i = 0; i < powerSources; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 3 + Math.random() * 2,
        energy: 0.8 + Math.random() * 0.2,
        connections: []
      })
    }

    // Create regular nodes
    for (let i = 0; i < nodeCount - powerSources; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random(),
        energy: 0.1 + Math.random() * 0.3,
        connections: []
      })
    }

    // Electrical pulse properties
    const pulses: {
      from: number
      to: number
      progress: number
      speed: number
      energy: number
    }[] = []

    const animate = () => {
      // Clear with subtle fade effect
      ctx.fillStyle = theme === "dark" ? "rgba(10, 10, 15, 0.1)" : "rgba(240, 240, 250, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update nodes and create connections
      nodes.forEach((node, i) => {
        // Make power sources pulse
        if (i < powerSources) {
          node.radius = 3 + Math.sin(Date.now() * 0.005) * 1.5
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        )
        gradient.addColorStop(0, theme === "dark" 
          ? `rgba(100, 200, 255, ${node.energy})` 
          : `rgba(30, 100, 220, ${node.energy})`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fill()

        // Occasionally create new pulses from power sources
        if (i < powerSources && Math.random() < 0.05) {
          // Find closest nodes
          const distances = nodes.map((n, idx) => ({
            idx,
            dist: Math.sqrt(Math.pow(n.x - node.x, 2) + Math.pow(n.y - node.y, 2))
          }))
          distances.sort((a, b) => a.dist - b.dist)
          
          // Create pulse to nearest 1-3 nodes
          const targetCount = 1 + Math.floor(Math.random() * 3)
          const targets = distances.slice(1, targetCount + 1)
          targets.forEach(target => {
            pulses.push({
              from: i,
              to: target.idx,
              progress: 0,
              speed: 0.005 + Math.random() * 0.01,
              energy: 0.7 + Math.random() * 0.3
            })
          })
        }
      })

      // Update and draw electrical pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i]
        pulse.progress += pulse.speed

        if (pulse.progress >= 1) {
          pulses.splice(i, 1)
          continue
        }

        const fromNode = nodes[pulse.from]
        const toNode = nodes[pulse.to]

        // Draw jagged lightning effect
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        
        // Create lightning-like path with random offsets
        const segments = 10
        for (let s = 1; s <= segments; s++) {
          const segProgress = s / segments
          const segX = fromNode.x + (toNode.x - fromNode.x) * segProgress
          const segY = fromNode.y + (toNode.y - fromNode.y) * segProgress
          
          // Add random offset to create jagged effect
          const offset = (1 - segProgress) * 20 * pulse.energy
          const finalX = segX + (Math.random() * 2 - 1) * offset
          const finalY = segY + (Math.random() * 2 - 1) * offset
          
          ctx.lineTo(finalX, finalY)
        }

        ctx.lineTo(toNode.x, toNode.y)
        
        // Style the lightning
        ctx.lineWidth = 1 + pulse.energy
        ctx.strokeStyle = theme === "dark" 
          ? `rgba(100, 200, 255, ${(1 - pulse.progress) * pulse.energy * 0.7})` 
          : `rgba(30, 100, 220, ${(1 - pulse.progress) * pulse.energy * 0.5})`
        ctx.stroke()

        // Add glow effect
        ctx.lineWidth = 3 + pulse.energy * 2
        ctx.strokeStyle = theme === "dark" 
          ? `rgba(100, 200, 255, ${(1 - pulse.progress) * pulse.energy * 0.2})` 
          : `rgba(200, 230, 255, ${(1 - pulse.progress) * pulse.energy * 0.1})`
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

export default AnimatedBackground