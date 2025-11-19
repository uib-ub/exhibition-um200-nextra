import {
  Carousel as CarouselComponent,
  CarouselButtons,
  CarouselContent,
  CarouselItem as CarouselItemComponent,
  CarouselScrollbar,
} from '@/components/vibes/soul/primitives/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { IconArrowUpRight } from '@tabler/icons-react';

export function Carousel({ title, topic, children, className }: { title: string, topic: string, children: React.ReactNode, className: string }) {
  return (
    <div className={cn("feature", className)}>
      <h2 className="text-xl md:text-xl flex items-center h-8 gap-5">
        {topic ? (
          <>
            <span className="hidden md:block">{topic}</span>
            <Separator orientation="vertical" className="bg-black" />
          </>) : null}
        <span>{title}</span>
      </h2>
      <CarouselComponent>
        <CarouselContent className="my-8">
          {children}
        </CarouselContent>

        <div className="flex w-full items-center justify-between">
          <CarouselScrollbar />
          <CarouselButtons nextLabel="Neste" previousLabel="Forrige" />
        </div>
      </CarouselComponent>
    </div>
  )
}

function CarouselItem({ year, title, href, image, imageAlt, index }: { year: string, title: string, href: string, image: string, imageAlt: string, index: number }) {
  const ItemLink = href.startsWith('http') ? <Link href={href} target='_blank' rel='noopener noreferrer'>Les mer <IconArrowUpRight className="w-4 h-4" /></Link> : <Link href={href}>Les mer</Link>;

  return (
    <CarouselItemComponent key={index} className="basis-full @md:basis-1/2 @3xl:basis-1/3 @4xl:basis-1/4 grid grid-rows-subgrid [grid-rows:span_4/span_4]">
      <Image src={image} alt={imageAlt} width={100} height={100} className="w-full aspect-video bg-accent object-cover" />
      <div className="text-sm text-gray-500 my-3">{year}</div>
      <h3 className="text-lg">{title}</h3>
      <Button variant="outline" className="w-min border-black mt-5" asChild>
        {ItemLink}
      </Button>
    </CarouselItemComponent>
  )
}

Carousel.Item = CarouselItem;