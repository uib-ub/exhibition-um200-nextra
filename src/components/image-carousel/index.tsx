import {
  Carousel as CarouselComponent,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/components/vibes/soul/primitives/carousel';
import Image from 'next/image';

export function ImageCarousel({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <CarouselComponent className="full py-20">
      <h2 className="text-xl md:text-xl flex h-8 gap-5">
        {title}
      </h2>
      <CarouselContent className="my-8 @container">
        {children}
      </CarouselContent>
      <div className="flex w-full items-center justify-between">
        <CarouselScrollbar />
        <CarouselButtons nextLabel="Neste" previousLabel="Forrige" />
      </div>
    </CarouselComponent>
  )
}

function ImageCarouselItem({ image, imageAlt, children }: { image: string, imageAlt: string, children: React.ReactNode }) {
  return (
    <CarouselItem className='basis-full @sm:basis-1/2 @lg:basis-1/3 @xl:basis-1/4  @2xl:basis-1/5 @6xl:basis-1/6'>
      <Image src={image} alt={imageAlt} width={600} height={600} className="object-contain bg-accent aspect-square" />
      {children}
    </CarouselItem>
  )
}

ImageCarousel.Item = ImageCarouselItem;
