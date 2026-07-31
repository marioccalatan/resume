import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

function TiltCard({ children, className = "", maxTilt = 6, ...rest }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt])
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt])
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"])
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.section
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <motion.div
        className="tilt-glare"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(103,212,255,0.16), transparent 60%)`,
        }}
      />
      {children}
    </motion.section>
  )
}

export default TiltCard
