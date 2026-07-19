"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/lib/landing-data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-lg bg-navy">
            <Sparkles className="size-4 text-gold" />
          </div>
          <span className="hidden text-sm font-semibold tracking-tight text-navy sm:block">
            AI Smart Campus Portal
          </span>
          <span className="text-sm font-semibold tracking-tight text-navy sm:hidden">
            ASCP
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-navy-muted hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" className="text-navy" nativeButton={false} render={<Link href="#" />}>
            Login
          </Button>
          <Button
            className="bg-navy text-white hover:bg-navy-light"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            Get Started
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            }
          />
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle className="text-navy">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-navy-muted hover:text-navy"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <Button variant="outline" nativeButton={false} render={<Link href="#" />}>
                Login
              </Button>
              <Button
                className="bg-navy text-white hover:bg-navy-light"
                nativeButton={false}
                render={<Link href="#contact" onClick={() => setOpen(false)} />}
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  )
}
