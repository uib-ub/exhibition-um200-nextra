import { Card as CardComponent, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
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
    <CardComponent className="border-none shadow-none p-0">
      <CardContent className="p-0 flex flex-col justify-start gap-2">
        <Link href={href} >
          <Image src={image} alt={imageAlt} width={100} height={100} className="w-full aspect-square object-cover rounded-t-[60px]" />
        </Link>
        <Link href={href}>
          <CardTitle className="text-xl md:text-3xl">{title}</CardTitle>
        </Link>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
        <Button variant="outline" className="w-min border-black" asChild>
          <Link href={href}>Les mer</Link>
        </Button>
      </CardContent>
    </CardComponent>
  )
}

export function Cards({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <>
      <h2 className="feature text-2xl font-bold py-5">{title}</h2>
      <div className="feature grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {children}
      </div>
    </>
  )
}