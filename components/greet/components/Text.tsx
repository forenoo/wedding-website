import React from "react";
import { motion } from "framer-motion";

interface TextProps {
  children: string;
  className: string;
}

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Text({ children, className }: TextProps) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, staggerChildren: 0.1 }}
    >
      {children.split(" ").map((word, index) => (
        <span key={index}>
          {word.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={defaultAnimation}
              className={`${className} inline-block`}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.span>
  );
}
