import { CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

interface CardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}

export function Card({ title, description, image, imageAlt, href }: CardProps) {
  return (
    <CardContent className="p-0 grid grid-rows-subgrid [grid-row:span_4/span_4] gap-5">
      <Link href={href}>
        <Image src={image} alt={imageAlt} width={100} height={100} className="w-full aspect-square object-cover rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px]" />
      </Link>
      <Link href={href}>
        <CardTitle className="text-md md:text-lg">{title}</CardTitle>
      </Link>
      {description ? <CardDescription className="text-sm md:text-base">{description}</CardDescription> : null}
      <Button variant="outline" className="w-min border-black" asChild>
        <Link href={href}>Les mer</Link>
      </Button>
    </CardContent>
  )
}

export function Cards({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <>
      <h2 className="feature text-2xl pt-5">{title}</h2>
      <div className="feature grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {children}
      </div>
    </>
  )
}