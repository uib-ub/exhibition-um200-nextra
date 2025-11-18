import {
  Carousel as CarouselComponent,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/components/vibes/soul/primitives/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface CarouselData {
  title: string;
  description: string;
  year: string;
  href: string;
  image: string;
  imageAlt: string;
}

export function Carousel({ title, period, data }: { title: string, period: string, data: CarouselData[] }) {
  return (
    <div className="feature">
      <h2 className="text-xl md:text-xl flex items-center h-8 gap-5">
        <span>{period}</span>
        <Separator orientation="vertical" className="bg-black" />
        <span>{title}</span>
      </h2>
      <CarouselComponent>
        <CarouselContent className="my-8">

          {data.map((item, index) => (
            <CarouselItem key={index} className="basis-full @md:basis-1/2 @3xl:basis-1/3 @4xl:basis-1/4 grid grid-rows-subgrid [grid-rows:span_4/span_4]">
              <div className="aspect-video bg-neutral-300"></div>
              <div className="text-sm text-gray-500 my-3">{item.year}</div>
              <h3 className="text-lg">{item.title}</h3>
              <Button variant="outline" className="w-min border-black mt-5" asChild>
                <Link href={item.href}>Les mer</Link>
              </Button>
            </CarouselItem>
          ))}

        </CarouselContent>

        <div className="flex w-full items-center justify-between">
          <CarouselScrollbar />
          <CarouselButtons nextLabel="Neste" previousLabel="Forrige" />
        </div>
      </CarouselComponent>
    </div>
  )
}