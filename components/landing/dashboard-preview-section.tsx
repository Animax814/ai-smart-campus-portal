"use client"

import {
  Activity,
  Bell,
  BookOpen,
  Briefcase,
  ChevronRight,
  Home,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { FadeIn } from "./motion"
import { SectionHeader } from "./section-header"

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Students" },
  { icon: BookOpen, label: "Courses" },
  { icon: Briefcase, label: "Placements" },
  { icon: Activity, label: "Analytics" },
  { icon: Settings, label: "Settings" },
]

const stats = [
  { label: "Total Students", value: "12,847", change: "+12%" },
  { label: "Active Placements", value: "342", change: "+8%" },
  { label: "Attendance Rate", value: "94.2%", change: "+2.1%" },
  { label: "AI Queries Today", value: "1,284", change: "+24%" },
]

export function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Dashboard Preview"
          title="Command center for your entire campus"
          description="A beautiful, intuitive dashboard that gives administrators and faculty complete visibility into every aspect of campus life."
          className="[&_h2]:text-white [&_p]:text-white/70 [&_[data-slot=badge]]:border-gold/30 [&_[data-slot=badge]]:bg-gold/10 [&_[data-slot=badge]]:text-gold-light"
        />

        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
          >
            <div className="flex min-h-[480px]">
              {/* Sidebar */}
              <div className="hidden w-56 shrink-0 border-r border-border/60 bg-navy-muted/30 p-4 md:block">
                <div className="mb-6 flex items-center gap-2 px-2">
                  <div className="size-7 rounded-lg bg-navy" />
                  <span className="text-xs font-semibold text-navy">ASCP Admin</span>
                </div>
                <nav className="space-y-1">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs ${
                        item.active
                          ? "bg-navy text-white"
                          : "text-muted-foreground hover:bg-white"
                      }`}
                    >
                      <item.icon className="size-3.5" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-navy md:text-base">
                      Campus Overview
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Real-time insights · Updated just now
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-2 rounded-lg border border-border/60 px-3 py-1.5 sm:flex">
                      <Search className="size-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Search...
                      </span>
                    </div>
                    <div className="relative flex size-8 items-center justify-center rounded-lg border border-border/60">
                      <Bell className="size-3.5 text-muted-foreground" />
                      <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-gold" />
                    </div>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border/60 p-3 md:p-4"
                    >
                      <p className="text-[10px] text-muted-foreground md:text-xs">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-navy md:text-xl">
                        {stat.value}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-2 border-green-200 bg-green-50 text-[10px] text-green-700"
                      >
                        {stat.change}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-5">
                  <div className="col-span-3 rounded-xl border border-border/60 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-medium text-navy">
                        Placement Trends
                      </p>
                      <ChevronRight className="size-3.5 text-muted-foreground" />
                    </div>
                    <div className="flex h-28 items-end gap-1.5">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-navy/80 transition-all hover:bg-gold"
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-border/60 p-4">
                    <p className="mb-3 text-xs font-medium text-navy">
                      Recent Activity
                    </p>
                    <div className="space-y-3">
                      {[
                        "New placement drive scheduled",
                        "AI report generated for CSE dept",
                        "Attendance alert: Batch 2024-A",
                      ].map((activity) => (
                        <div
                          key={activity}
                          className="flex items-start gap-2 text-[11px] text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
