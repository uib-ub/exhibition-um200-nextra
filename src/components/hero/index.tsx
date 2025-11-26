import { cn } from '@/lib/utils'
import { LottieAnimation } from '../animation'

export function Hero({ className, children }: { className: string, children: React.ReactNode }) {
  return (
    <div className={cn("w-screen relative left-1/2 -translate-x-1/2 grid grid-cols-subgrid p-5 md:p-8 -mt-4 mb-5 md:mb-10  max-h-[600px]", className)}>
      <div className="w-full max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export function HeroAnimation({ animation, className }: { animation: string, className: string }) {
  return (
    <div className={cn("border-4 rounded-t-[60px] sm:rounded-t-[140px] md:rounded-t-[220px]", className)}>
      <div className="relative mx-auto">
        <LottieAnimation animation={animation} />
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
    <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase mt-5 md:mt-6">{children}</h1>
  )
}

export function HeroDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xl">{children}</div>
  )
}