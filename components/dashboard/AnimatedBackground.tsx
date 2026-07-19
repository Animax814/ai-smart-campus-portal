"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]"
      />
    </div>
  );
}