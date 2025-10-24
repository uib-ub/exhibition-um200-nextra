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

  return (
    <div className={cn("group cursor-pointer", className)}>
      <div
        className={cn("overflow-hidden rounded-t-[120px] border-4 transition-all duration-300", variant)}
      >
        <div className={`relative aspect-[3/4]`}>
          <Image src={imageSrc} alt={imageAlt} fill sizes="100%" className="object-cover" />
        </div>
      </div>
      <div className={`px-2 py-1 text-center ${variant} transition-all duration-300`}>
        <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-foreground">{title}</h3>
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
