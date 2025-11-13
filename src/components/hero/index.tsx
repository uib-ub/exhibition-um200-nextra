import { cn } from '@/lib/utils'
import Image from 'next/image'

export function Hero({ className, children }: { className: string, children: React.ReactNode }) {
  return (
    <div className={cn("w-screen relative left-1/2 -translate-x-1/2 grid grid-cols-subgrid p-10 -mt-4", className)}>
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export function HeroImage({ src, alt, className }: { src: string, alt: string, className: string }) {
  return (
    <div className={cn("border-4 rounded-t-[60px] sm:rounded-t-[100px] md:rounded-t-[120px]", className)}>
      <div className="relative aspect-video">
        <Image src={src} alt={alt} fill sizes="100%" className="object-contain p-10" />
      </div>
    </div>
  )
}

export function HeroContent({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div className={cn("flex flex-col gap-3 items-center justify-center py-3", className)}>
      {children}
    </div>
  )
}

export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl md:text-5xl">{children}</h1>
  )
}

export function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xl">{children}</div>
  )
}