import Image from "next/image"
import { cn } from "@/lib/utils"
import mainCategories from "./main-categories.json"

interface NavCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  variant: string
  className?: string
}

export function NavCard({ title, imageSrc, imageAlt, variant, className }: NavCardProps) {
  const variants: Record<string, string> = {
    dyr: "border-um-dyr-solid group-hover:bg-um-dyr-solid",
    arkeologi: "border-um-arkeologi-solid group-hover:bg-um-arkeologi-solid",
    fisk: "border-um-fisk-solid group-hover:bg-um-fisk-solid",
    vaer: "border-um-vaer-solid group-hover:bg-um-vaer-solid",
    hverdag: "border-um-hverdag-solid group-hover:bg-um-hverdag-solid",
    utland: "border-um-utland-solid group-hover:bg-um-utland-solid",
    kirkekunst: "border-um-kirkekunst-solid group-hover:bg-um-kirkekunst-solid",
    stein: "border-um-stein-solid group-hover:bg-um-stein-solid",
    tegn: "border-um-tegn-solid group-hover:bg-um-tegn-solid",
    tidrom: "border-um-tidrom-solid group-hover:bg-um-tidrom-solid",
    helse: "border-um-helse-solid group-hover:bg-um-helse-solid",
    glass: "border-um-glass-solid group-hover:bg-um-glass-solid",
    vekster: "border-um-vekster-solid group-hover:bg-um-vekster-solid",
  }

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-t-[120px] border-4 transition-all duration-300", variants[variant]
        )}
      >
        <div className={`relative aspect-[3/4]`}>
          <Image src={imageSrc} alt={imageAlt} fill sizes="100%" className="object-cover" />
        </div>
      </div>
      <div className={cn(
        "px-2 py-1 text-center transition-all duration-300",
        variants[variant]
      )}>
        <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-foreground ">{title}</h3>
      </div>
    </div>
  )
}

export function NavCards({ title }: { title: string }) {
  return (
    <div className="feature py-10">
      <h2 className="text-2xl font-bold pb-10">{title}</h2>

      <div className="feature grid grid-rows-3 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
        {mainCategories.map((category, index) => (
          <NavCard
            key={`${category.title}-${index}`}
            {...category}
          />
        ))}
      </div>
    </div>
  )
}
