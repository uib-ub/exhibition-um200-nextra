'use client';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Image from 'next/image';

const peopleRow1 = [
  {
    image: '/images/menneskene/Christie_grunnleggerBy1871.jpg',
    imageAlt: 'Portrett av Wilhelm Frimann Koren Christie',
  },
  {
    image: '/images/menneskene/By7851_Neumann_red.jpg',
    imageAlt: 'Portrett av Jacob Neumann',
  },
  {
    image: '/nav-card-images/vintage-fish-illustration.jpg',
    imageAlt: 'Portrett av August Konow',
  },
  {
    image: '/images/menneskene/AndersLorange_red.jpg',
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
    image: '/images/menneskene/HaakonShetelig_red.jpg',
    imageAlt: 'Portrett av Haakon Shetelig',
  },
  {
    image: '/images/menneskene/Johs_Bøe_red.jpg',
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
  {
    image: '/images/menneskene/ubb-bs-fol-00644-001c_xl-wiesener.jpg',
    imageAlt: 'Portrett av Anton Mohr Wiesener',
  },
  {
    image: '/images/menneskene/ubb-bgm-bok-1925-astrid-karlsen.jpg',
    imageAlt: 'Portrett av Astrid Karlsen',
  },
  {
    image: '/images/menneskene/ubb-ms-2093-l-1-072-062-astrid-monsen.jpg',
    imageAlt: 'Portrett av Astrid Monsen',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-01039-013-b_xl-august-brinkmann.jpg',
    imageAlt: 'Portrett av August Brinkmann',
  },
  {
    image: '/images/menneskene/ubb-nor-u-0053_xl-bjoern-trumpy.jpg',
    imageAlt: 'Portrett av Bjørn Trumpy',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-01263-007-c_xl-helland-hansen.jpg',
    imageAlt: 'Portrett av Bjørn Helland-Hansen',
  },
  {
    image: '/images/menneskene/ubb-jr-234-007_xl-carl-fredrik-kolderup.jpg',
    imageAlt: 'Portrett av Carl Fredrik Kolderup',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-02335_xl-danielssen.jpg',
    imageAlt: 'Portrett av Daniel Cornelius Danielssen',
  },
]

const peopleRow2 = [
  {
    image: '/images/menneskene/ubb-bs-ok-03493_xl-ellen-brunchorst.jpg',
    imageAlt: 'Portrett av Ellen Brunchorst',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-00410_xl-nansen.jpg',
    imageAlt: 'Portrett av Fridtjof Nansen',
  },
  {
    image: '/images/menneskene/ubb-xxvi-011-056-d_xl-armauer-hansen.jpg',
    imageAlt: 'Portrett av Gerhard Armauer Hansen',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-00644-001a_xl-bucher.jpg',
    imageAlt: 'Portrett av Henrich Bucher jr.',
  },
  {
    image: '/images/menneskene/ubb-bs-ok-00300_xl-friele.jpg',
    imageAlt: 'Portrett av Herman Friele',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-01796_xl-james-grieg.jpg',
    imageAlt: 'Portrett av James Alexanderssøn Grieg',
  },
  {
    image: '/images/menneskene/ubb-bs-ok-05795-001_xl-jack-bjerknes.jpg',
    imageAlt: 'Portrett av Jack Bjerknes',
  },
  {
    image: '/images/menneskene/ubb-jr-236-011_xl-jens-holmboe.jpg',
    imageAlt: 'Portrett av Jens Holmboe',
  },
  {
    image: '/images/menneskene/ubb-bgm-bok-1900-johan-koren.jpg',
    imageAlt: 'Portrett av Johan Koren',
  },
  {
    image: '/images/menneskene/ubb-bs-ok-01442_xl-joergen-brunchorst.jpg',
    imageAlt: 'Portrett av Jørgen Brunchorst',
  },
  {
    image: '/images/menneskene/ubb-ms 2093-T-02-15-04-07-miranda-boedtker.jpg',
    imageAlt: 'Portrett av Miranda Bødtker',
  },
  {
    image: '/images/menneskene/ubb-ms-2072-e-11-005-knut-faegri.jpg',
    imageAlt: 'Portrett av Knut Fægri',
  },
  {
    image: '/images/menneskene/ubb-bs-ok-01594_xl-michael-sars.jpg',
    imageAlt: 'Portrett av Michael Sars',
  },
  {
    image: '/images/menneskene/ubb-lkl-2-42-06_xl-niels-henrik-kolderup.jpg',
    imageAlt: 'Portrett av Niels-Henrik Kolderup',
  },
  {
    image: '/images/menneskene/ubb-bgm-bok-1900-olaf-jensen.jpg',
    imageAlt: 'Portrett av Olaf Jensen',
  },
  {
    image: '/images/menneskene/bt-12-05-2024-olav-espevoll.jpg',
    imageAlt: 'Portrett av Olav Espevoll',
  },
  {
    image: '/images/menneskene/ubb-ec-008-004f_xl1-oscar-hagem.jpg',
    imageAlt: 'Portrett av Oscar Hagem',
  },
  {
    image: '/images/menneskene/ubb-bs-q-00182_xl-peter-hysing.jpg',
    imageAlt: 'Portrett av Peter Hysing',
  },
  {
    image: '/images/menneskene/ubb-bgm-bok-1900-peter-stuwitz.jpg',
    imageAlt: 'Portrett av Peter Stuwitz',
  },
  {
    image: '/images/menneskene/ubb-bs-q-00376_xl-rolf-nordhagen.jpg',
    imageAlt: 'Portrett av Rolf Nordhagen',
  },
  {
    image: '/images/menneskene/ubb-ms-2093-T-001-022-thomas-christian-thomassen.jpg',
    imageAlt: 'Portrett av Thomas Christian Thomassen',
  },
  {
    image: '/images/menneskene/ubb-bs-fol-01263-019-b_xl-torbjoern-gaarder.jpg',
    imageAlt: 'Portrett av Torbjørn Gaarder',
  },
  {
    image: '/images/menneskene/ubb-xxvi-005-036_xl-torleiv-hannaas.jpg',
    imageAlt: 'Portrett av Torleiv Hannaas',
  },
  {
    image: '/images/menneskene/ubb-bs-q-00364_xl-vilhelm-bjerknes.jpg',
    imageAlt: 'Portrett av Vilhelm Bjerknes',
  },
  {
    image: '/images/menneskene/ubb-bgm-bok-1900-aagaat-daae.jpg',
    imageAlt: 'Portrett av Aagaat Daae',
  },
];

export const PeopleMarquee = () => (
  <div className="full hidden md:flex flex-col gap-10 w-full items-center justify-center my-10">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent direction="right" loop={1}>
        {peopleRow1.map((person, index) => (
          <MarqueeItem className="size-44 aspect-square" key={index}>
            <Image
              alt={person.imageAlt}
              className="overflow-hidden object-top object-cover rounded-full size-44"
              src={person.image}
              width={192}
              height={192}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent direction="left" loop={1}>
        {peopleRow2.map((person, index) => (
          <MarqueeItem className="size-44 aspect-square" key={index}>
            <Image
              alt={person.imageAlt}
              className="overflow-hidden object-top object-cover rounded-full size-44"
              src={person.image}
              width={192}
              height={192}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
