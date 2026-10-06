import type { ComponentProps, ElementType } from "react"
import type { LucideProps } from "lucide-react"
import { cn } from "cn"
import { Button } from "@/components/ui/button"

type IconTextButtonProps = ComponentProps<typeof Button> & {
  icon: ElementType<LucideProps>
  iconPosition?: "start" | "end"
}

export function IconTextButton({
  icon: Icon,
  iconPosition = "start",
  children,
  className,
  ...props
}: IconTextButtonProps) {
  const icon = (
    <span
      className="inline-flex size-4 shrink-0 items-center justify-center"
      data-icon={iconPosition === "start" ? "inline-start" : "inline-end"}
    >
      <Icon size={16} aria-hidden className="size-4" />
    </span>
  )

  return (
    <Button className={cn("leading-none", className)} {...props}>
      {iconPosition === "start" ? icon : null}
      <span className="leading-none">{children}</span>
      {iconPosition === "end" ? icon : null}
    </Button>
  )
}
