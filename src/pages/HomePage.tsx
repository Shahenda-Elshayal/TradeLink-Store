import { IconTextButton } from "@/components/IconTextButton"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-wrap items-center gap-2">
        <IconTextButton variant="dispatch" icon={PlusCircle}>
          Quick Dispatch
        </IconTextButton>
        <Button variant="outline">+ Quick Dispatch</Button>
        <Button variant="destructive">+ Quick Dispatch</Button>
        <Button variant="secondary">+ Quick Dispatch</Button>
        <Button variant="ghost">+ Quick Dispatch</Button>
        <Button variant="link">+ Quick Dispatch</Button>
      </div>
    </>
  )
}
