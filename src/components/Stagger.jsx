import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export function StaggerGroup({ children, className, as = "ul", ...rest }) {
  const MotionTag = motion[as] || motion.ul

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ children, className, as = "li", ...rest }) {
  const MotionTag = motion[as] || motion.li

  return (
    <MotionTag className={className} variants={item} {...rest}>
      {children}
    </MotionTag>
  )
}
