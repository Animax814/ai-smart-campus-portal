"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

type AnimatedCounterProps = {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const spring = useSpring(0, { duration: 2000, bounce: 0 })
  const display = useTransform(spring, (current) => Math.round(current))

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => spring.set(value), delay * 1000)
      return () => clearTimeout(timeout)
    }
  }, [isInView, spring, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm"
    >
      <div className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
        <motion.span>{display}</motion.span>
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
