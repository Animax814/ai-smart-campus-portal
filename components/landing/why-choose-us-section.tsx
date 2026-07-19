"use client"

import { whyChooseUs } from "@/lib/landing-data"
import { MotionDiv, Stagger } from "./motion"
import { SectionHeader } from "./section-header"

export function WhyChooseUsSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Built for the future of education"
          description="We combine cutting-edge AI with deep understanding of campus operations to deliver a platform that truly transforms how institutions operate."
        />

        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <MotionDiv key={item.title}>
              <div className="group flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-white transition-colors group-hover:border-gold/40 group-hover:bg-gold-muted">
                  <item.icon className="size-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
