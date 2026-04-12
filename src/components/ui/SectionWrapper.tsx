"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
