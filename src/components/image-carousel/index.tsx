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
    <div className="feature">
      <h2 className="text-xl md:text-xl flex items-center h-8 gap-5">
        {title}
      </h2>
      <CarouselComponent>
        <CarouselContent className="my-8 relative">
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

function ImageCarouselItem({ image, imageAlt, title, children }: { image: string, imageAlt: string, title: string, children: React.ReactNode }) {
  return (
    <CarouselItem className=''>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <Image src={image} alt={imageAlt} width={100} height={100} className="w-fit h-64 md:h-96 object-contain rounded" />
        <h3 className="text-lg">{title}</h3>
        <p className="max-w-fit">{children}</p>
      </div>
    </CarouselItem>
  )
}

ImageCarousel.Item = ImageCarouselItem;
