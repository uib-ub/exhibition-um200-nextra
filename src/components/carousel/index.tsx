import {
  Carousel as CarouselComponent,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/components/vibes/soul/primitives/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      <h2 className="text-2xl font-bold">{period} | {title}</h2>
      <CarouselComponent>
        <CarouselContent className="mb-10">

          {data.map((item) => (
            <CarouselItem key={item.title}>
              <div className="basis-full @sm:basis-1/2 @md:basis-1/3 @4xl:basis-1/4 w-80 aspect-video bg-neutral-300"></div>
              <div className="flex flex-col gap-2 pt-3 justify-start">
                <div className="text-sm text-gray-500">{item.year}</div>
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                <Button variant="outline" className="w-min border-black" asChild>
                  <Link href={item.href}>Les mer</Link>
                </Button>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>

        <div className="flex w-full items-center justify-between">
          <CarouselScrollbar />
          <CarouselButtons nextLabel="Neste" previousLabel="Forrige" />
        </div>
      </CarouselComponent >
    </div >
  )
}