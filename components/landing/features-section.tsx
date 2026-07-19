"use client"

import { Card, CardContent } from "@/components/ui/card"
import { features } from "@/lib/landing-data"
import { MotionDiv, Stagger } from "./motion"
import { SectionHeader } from "./section-header"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-navy-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="AI Features"
          title="Everything your campus needs, powered by AI"
          description="Six intelligent modules designed to streamline operations, boost placements, and empower every student on their journey."
        />

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <MotionDiv key={feature.title}>
              <Card className="group h-full border-border/60 bg-white transition-all duration-300 hover:border-gold/30 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
