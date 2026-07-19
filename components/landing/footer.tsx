import Link from "next/link"
import { Mail, MapPin, Phone, Sparkles } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { footerLinks } from "@/lib/landing-data"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-navy">
                <Sparkles className="size-4 text-gold" />
              </div>
              <span className="text-sm font-semibold text-navy">
                AI Smart Campus Portal
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The intelligent platform empowering modern universities with
              AI-driven tools for attendance, placements, analytics, and career
              guidance.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-gold" />
                contact@aismartcampus.edu
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 shrink-0 text-gold" />
                +91 1800-123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-gold" />
                Hyderabad, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Product</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Smart Campus Portal. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-navy"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
