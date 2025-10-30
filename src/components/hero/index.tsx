import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("full grid grid-cols-subgrid py-10")}>
      {children}
    </div>
  )
}

export function HeroImage({ src, alt, className }: { src: string, alt: string, className: string }) {
  return (
    <div className={cn("feature border-4 rounded-t-[60px] sm:rounded-t-[100px] md:rounded-t-[120px]", className)}>
      <div className="relative aspect-video">
        <Image src={src} alt={alt} fill sizes="100%" className="object-contain p-10" />
      </div>
    </div>
  )
}

export function HeroContent({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={cn("feature text-center py-3", className)}>
      {children}
    </div>
  )
}

export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold">{children}</h1>
  )
}

export function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-lg">{children}</div>
  )
}