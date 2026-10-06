import { IconTextButton } from "@/components/IconTextButton"
import { Button } from "@/components/ui/button"
import { useRouterState } from "@tanstack/react-router"
import { PlusCircle } from "lucide-react"

export function HomePage() {

  // const state = useRouterState();

  // console.log(state);

  const selected = useRouterState({
    select: (state) => state.location.pathname,
  })

  console.log(selected);

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
