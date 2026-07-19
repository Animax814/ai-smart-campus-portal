"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { FadeIn } from "./motion"

export function CtaSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center md:px-16 md:py-20"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-gold/5 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to transform your campus?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
                Join hundreds of institutions already using AI Smart Campus Portal
                to deliver exceptional education experiences.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-11 bg-gold px-8 text-navy hover:bg-gold-light"
                  nativeButton={false}
                  render={<Link href="#" />}
                >
                  Start Free Trial
                  <ArrowRight className="ml-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 border-white/20 bg-transparent px-8 text-white hover:bg-white/10"
                  nativeButton={false}
                  render={<Link href="#" />}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
