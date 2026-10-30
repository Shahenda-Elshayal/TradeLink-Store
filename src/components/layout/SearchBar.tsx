import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative w-full md:max-w-md md:mx-auto">
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type="search"
        placeholder="Search products, categories..."
        className="h-10 w-full min-w-0 rounded-sm bg-white pl-9"
        aria-label="Search products"
      />
    </div>
  )
}