"use client"

import { Quote } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/landing-data"
import { MotionDiv, Stagger } from "./motion"
import { SectionHeader } from "./section-header"

export function TestimonialsSection() {
  return (
    <section id="departments" className="bg-navy-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="Loved by students and faculty alike"
          description="Hear from the people who use AI Smart Campus Portal every day to achieve extraordinary outcomes."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <MotionDiv key={testimonial.name}>
              <Card className="h-full border-border/60 bg-white">
                <CardContent className="flex h-full flex-col p-6">
                  <Quote className="mb-4 size-8 text-gold/60" />
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-6">
                    <Avatar size="lg">
                      <AvatarFallback className="bg-navy text-xs text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role} · {testimonial.department}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
