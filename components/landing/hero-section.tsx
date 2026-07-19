"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "./animated-counter"
import { heroStats } from "@/lib/landing-data"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-[400px] rounded-full bg-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-gold/30 bg-gold-muted px-3 py-1 text-navy"
              >
                AI-Powered Campus Management
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              Transform Your Campus with{" "}
              <span className="text-gradient-gold">AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              The all-in-one intelligent platform for modern universities — from
              attendance and placements to AI-driven career guidance and real-time
              analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="h-11 bg-navy px-6 text-white hover:bg-navy-light"
                nativeButton={false}
                render={<Link href="#contact" />}
              >
                Get Started Free
                <ArrowRight className="ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 border-navy/20 px-6 text-navy hover:bg-navy-muted"
                nativeButton={false}
                render={<Link href="#dashboard" />}
              >
                <Play className="mr-1 size-4" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-navy-muted via-white to-gold-muted shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-navy shadow-lg">
                  <svg
                    className="size-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <p className="text-center text-sm font-medium text-navy">
                  Campus Intelligence Platform
                </p>
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  Illustration placeholder
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 rounded-xl border border-border/60 bg-white px-4 py-3 shadow-md"
              >
                <p className="text-xs text-muted-foreground">AI Assistant</p>
                <p className="text-sm font-medium text-navy">Online & Ready</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 rounded-xl border border-border/60 bg-white px-4 py-3 shadow-md"
              >
                <p className="text-xs text-muted-foreground">Placements</p>
                <p className="text-sm font-medium text-gold">98% Success Rate</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {heroStats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={0.6 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
