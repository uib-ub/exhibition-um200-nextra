'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Image from 'next/image';

const people = [
  {
    image: '/images/Mennesker-museet/Christie_grunnleggerBy1871.jpg',
    imageAlt: 'Portrett av Wilhelm Frimann Koren Christie',
  },
  {
    image: '/images/Mennesker-museet/By7851_Neumann_red.jpg',
    imageAlt: 'Portrett av Jacob Neumann',
  },
  {
    image: '/nav-card-images/vintage-fish-illustration.jpg',
    imageAlt: 'Portrett av August Konow',
  },
  {
    image: '/images/Mennesker-museet/AndersLorange_red.jpg',
    imageAlt: 'Portrett av Andres Lorange',
  },
  {
    image: '/nav-card-images/bt-23-10-1933-olaf-hanssen-icon.jpg',
    imageAlt: 'Portrett av Olaf Hanssen',
  },
  {
    image: '/nav-card-images/vintage-fish-illustration.jpg',
    imageAlt: 'Portrett av Magdalene Abel',
  },
  {
    image: '/images/Mennesker-museet/HaakonShetelig_red.jpg',
    imageAlt: 'Portrett av Haakon Shetelig',
  },
  {
    image: '/images/Mennesker-museet/Johs_Bøe_red.jpg',
    imageAlt: 'Portrett av Johs. Bøe',
  },
  {
    image: '/nav-card-images/vintage-fish-illustration.jpg',
    imageAlt: 'Portrett av Eva Fett',
  },
  {
    image: '/nav-card-images/vintage-fish-illustration.jpg',
    imageAlt: 'Portrett av Per Fett',
  },
];

export const PeopleMarquee = () => (
  <div className="full hidden md:flex w-full h-64 items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {people.map((person, index) => (
          <MarqueeItem className="h-32 w-32" key={index}>
            <Image
              alt={person.imageAlt}
              className="overflow-hidden rounded-full"
              src={person.image}
              width={128}
              height={128}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
