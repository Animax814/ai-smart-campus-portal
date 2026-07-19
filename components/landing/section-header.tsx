import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { FadeIn } from "./motion"

type SectionHeaderProps = {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-2xl text-left",
        className
      )}
    >
      {badge && (
        <Badge
          variant="outline"
          className="mb-4 border-gold/30 bg-gold-muted px-3 py-1 text-navy"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
