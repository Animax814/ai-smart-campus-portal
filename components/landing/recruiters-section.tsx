"use client"

import { motion } from "framer-motion"
import { recruiters } from "@/lib/landing-data"
import { SectionHeader } from "./section-header"

export function RecruitersSection() {
  return (
    <section id="placements" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Recruiters"
          title="Trusted by leading companies worldwide"
          description="200+ top recruiters partner with our platform to discover and hire the best campus talent."
        />

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6"
          >
            {[...recruiters, ...recruiters].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-white px-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-sm font-semibold tracking-tight text-navy/60">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
