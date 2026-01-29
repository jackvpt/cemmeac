// components/SlideIn.jsx
import { motion } from "framer-motion";

export default function SlideIn({ children, direction = "left", delay = 0 }) {
  const xFrom = direction === "left" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: xFrom }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
