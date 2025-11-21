import { CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react';
import { Button } from '../ui/button'

interface CardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}

export function Card({ title, description, image, imageAlt, href }: CardProps) {
  const ItemLink = href.startsWith('http') ? <Link href={href} target='_blank' rel='noopener noreferrer'>Les mer <IconArrowUpRight className="w-4 h-4" /></Link> : <Link href={href}>Les mer</Link>;

  return (
    <CardContent className="p-0 grid grid-rows-subgrid [grid-row:span_4/span_4] gap-2">
      <Link href={href}>
        <Image src={image} alt={imageAlt} width={300} height={300} className="w-full aspect-square object-cover rounded-t-[30px] sm:rounded-t-[50px] md:rounded-t-[60px]" />
      </Link>
      <Link href={href} className="mb-2">
        <CardTitle className="text-md md:text-lg font-medium">{title}</CardTitle>
      </Link>
      <CardDescription className="text-xs md:text-sm font-light text-foreground my-2">{description ?? 'Mangler beskrivelse'}</CardDescription>
      <Button variant="outline" className="w-min border-black mt-2" asChild>
        {ItemLink}
      </Button>
    </CardContent>
  )
}

export function Cards({ title, children, id, className }: { title: string, children: React.ReactNode, id: string, className: string }) {
  return (
    <div id={id} className={className}>
      <h2 className="text-xl md:text-2xl pt-5">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14 w-full">
        {children}
      </div>
    </div>
  )
}