import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
export function AnimatedCard({ children }) {
  return <motion.div whileHover={{ scale: 1.1 }}>
   {children}
  </motion.div>;
}
