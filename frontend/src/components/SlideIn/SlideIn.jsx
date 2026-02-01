import { motion, useReducedMotion } from "framer-motion"
import { useTheme, useMediaQuery } from "@mui/material"

const SlideIn = ({ children, direction = "left", delay = 0 }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const prefersReducedMotion = useReducedMotion()

  if (isMobile || prefersReducedMotion) {
    return <>{children}</>
  }

  const xFrom = direction === "left" ? -20 : 20

  return (
    <motion.div
      initial={{ opacity: 0, x: xFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default SlideIn
