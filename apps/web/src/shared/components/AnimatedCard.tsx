import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  index?: number;
  className?: string;
  hover?: boolean;
};

export function AnimatedCard({ children, index = 0, className = "", hover = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{
        opacity: { delay: index * 0.05, duration: 0.4 },
        y: { delay: index * 0.05, duration: 0.4 },
        scale: { duration: 0.15 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
