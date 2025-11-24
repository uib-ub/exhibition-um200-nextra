import Image from "next/image"
import { cn } from "@/lib/utils"
import mainCategories from "./main-categories.json"
import Link from 'next/link'

interface NavCardProps {
  title: string
  href: string
  imageSrc: string
  imageAlt: string
  variant: string
  className?: string
}

/* function AnimatedOverlay() {
  return (
    <>
      <div className="pointer-events-none absolute -top-6 left-1/3 -translate-x-1/2 rotate-25 transform z-20">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 text-white drop-shadow-md opacity-0 scale-90 transition-all duration-600 group-hover:animate-pulse group-hover:opacity-100 group-hover:scale-100"
          fill="cyan"
        >
          <path d="M12 2l2.923 5.92 6.54.951-4.731 4.612 1.116 6.507L12 17.77l-5.848 3.22 1.116-6.507L2.537 8.87l6.54-.951L12 2z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-6 left-2/3 -translate-x-1/2 rotate-45 transform z-20">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 text-white drop-shadow-md opacity-0 scale-90 transition-all duration-1100 group-hover:animate-ping group-hover:opacity-100 group-hover:scale-100"
          fill="yellow"
        >
          <path d="M12 2l2.923 5.92 6.54.951-4.731 4.612 1.116 6.507L12 17.77l-5.848 3.22 1.116-6.507L2.537 8.87l6.54-.951L12 2z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute top-6 left-2/3 -translate-x-1/2 rotate-45 transform z-20">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 text-white drop-shadow-md opacity-0 scale-90 transition-all duration-1100 group-hover:opacity-100 group-hover:scale-100"
          fill="yellow"
        >
          <path d="M12 2l2.923 5.92 6.54.951-4.731 4.612 1.116 6.507L12 17.77l-5.848 3.22 1.116-6.507L2.537 8.87l6.54-.951L12 2z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-24 left-2/5 -translate-x-1/2 rotate-65 transform z-20">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-10 w-10 text-white drop-shadow-md opacity-0 scale-90 transition-all duration-600 group-hover:opacity-100 group-hover:scale-100"
          fill="red"
        >
          <path d="M12 2l2.923 5.92 6.54.951-4.731 4.612 1.116 6.507L12 17.77l-5.848 3.22 1.116-6.507L2.537 8.87l6.54-.951L12 2z" />
        </svg>
      </div>
    </>
  )
} */

export function NavCard({ title, href, imageSrc, imageAlt, variant, className }: NavCardProps) {
  const variants: Record<string, Record<string, string>> = {
    arkeologi: {
      border: "border-um-arkeologi-solid",
      bg: "bg-um-arkeologi-tint",
      bgHover: "group-hover:bg-um-arkeologi-solid"
    },
    "bokstaver-og-tegn": {
      border: "border-um-tegn-solid",
      bg: "bg-um-tegn-tint",
      bgHover: "group-hover:bg-um-tegn-solid"
    },
    dyr: {
      border: "border-um-dyr-solid",
      bg: "bg-um-dyr-tint",
      bgHover: "group-hover:bg-um-dyr-solid"
    },
    fisk: {
      border: "border-um-fisk-solid",
      bg: "bg-um-fisk-tint",
      bgHover: "group-hover:bg-um-fisk-solid",
    },
    glass: {
      border: "border-um-glass-solid",
      bg: "bg-um-glass-tint",
      bgHover: "group-hover:bg-um-glass-solid",
    },
    helse: {
      border: "border-um-helse-solid",
      bg: "bg-um-helse-tint",
      bgHover: "group-hover:bg-um-helse-solid",
    },
    "hverdag": {
      border: "border-um-hverdag-solid",
      bg: "bg-um-hverdag-tint",
      bgHover: "group-hover:bg-um-hverdag-solid",
    },
    "verden-i-bergen": {
      border: "border-um-utland-solid",
      bg: "bg-um-utland-tint",
      bgHover: "group-hover:bg-um-utland-solid",
    },
    kirkekunst: {
      border: "border-um-kirkekunst-solid",
      bg: "bg-um-kirkekunst-tint",
      bgHover: "group-hover:bg-um-kirkekunst-solid",
    },
    stein: {
      border: "border-um-stein-solid",
      bg: "bg-um-stein-tint",
      bgHover: "group-hover:bg-um-stein-solid",
    },
    "tid-og-rom": {
      border: "border-um-tidrom-solid",
      bg: "bg-um-tidrom-tint",
      bgHover: "group-hover:bg-um-tidrom-solid",
    },
    "vann-vaer-og-vind": {
      border: "border-um-vaer-solid",
      bg: "bg-um-vaer-tint",
      bgHover: "group-hover:bg-um-vaer-solid",
    },
    vekster: {
      border: "border-um-vekster-solid",
      bg: "bg-um-vekster-tint",
      bgHover: "group-hover:bg-um-vekster-solid",
    },
  }

  return (
    <Link href={href} className={cn("group cursor-pointer relative", className)}>
      {/* <AnimatedOverlay /> */}
      <div
        className={cn(
          "overflow-hidden rounded-t-[120px] border-4 transition-all duration-300 relative",
          variants[variant].border,
          variants[variant].bg
        )}
      >
        <div className={`z-1 relative aspect-3/4 `}>
          <Image src={imageSrc} alt={imageAlt} fill sizes="100%" className="object-contain object-bottom transition-opacity duration-300" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
      <div className={cn(
        "px-2 py-1 text-center transition-all duration-300",
        variants[variant].bgHover
      )}>
        <h3 className="font-serif font-medium uppercase tracking-wider text-foreground">{title}</h3>
      </div>
    </Link>
  )
}

export function NavCards({ title }: { title: string }) {
  return (
    <div className="feature">
      <h2 className="text-xl md:text-2xl pb-10">{title}</h2>

      <div className="feature grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-y-5">
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
