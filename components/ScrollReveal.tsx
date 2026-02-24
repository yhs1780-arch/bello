"use client";

import { motion } from "framer-motion";

const defaultUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "fade" | "scale";
  delay?: number;
  once?: boolean;
}) {
  const variants = {
    up: defaultUp,
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: {
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants[variant]}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
