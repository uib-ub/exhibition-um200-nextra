import { IconFish, IconAlien, IconBuildingChurch, IconGlass, IconHeart, IconHorse, IconLetterA, IconCalendar, IconWorld, IconHandRock, IconClock, IconCloudRain, IconPlant } from '@tabler/icons-react';

const meta = {
  'index': {
    title: '200 år med vidunderlig vitenskap',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      toc: false
    }
  },
  'tema': {
    title: 'Tema',
    type: 'menu',
    items: {
      'arkeologi': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-arkeologi-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconAlien className="w-5 h-5 inline-block" />
            <div>Arkeologi</div>
          </div>
        ),
        href: '/tema/arkeologi'
      },
      'bokstaver-og-tegn': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-tegn-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconLetterA className="w-5 h-5 inline-block" />
            <div>Bokstaver og tegn</div>
          </div>
        ),
        href: '/tema/bokstaver-og-tegn'
      },
      'det-store-utland': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-utland-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconWorld className="w-5 h-5 inline-block" />
            <div>Det store utland</div>
          </div>
        ),
        href: '/tema/det-store-utland'
      },
      'dyr': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-dyr-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconHorse className="w-5 h-5 inline-block" />
            <div>Dyr</div>
          </div>
        ),
        href: '/tema/dyr'
      },
      'fisk': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-fisk-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconFish className="w-5 h-5 inline-block" />
            <div>Fisk</div>
          </div>
        ),
        href: '/tema/fisk'
      },
      'glass': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-glass-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconGlass className="w-5 h-5 inline-block" />
            <div>Glass</div>
          </div>
        ),
        href: '/tema/glass'
      },
      'helse': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-helse-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconHeart className="w-5 h-5 inline-block" />
            <div>Helse</div>
          </div>
        ),
        href: '/tema/helse'
      },
      'hverdag': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-hverdag-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconCalendar className="w-5 h-5 inline-block" />
            <div>Hverdag</div>
          </div>
        ),
        href: '/tema/hverdag'
      },
      'kirkekunst': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-kirkekunst-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconBuildingChurch className="w-5 h-5 inline-block" />
            <div>Kirkekunst</div>
          </div>
        ),
        href: '/tema/kirkekunst'
      },
      'stein': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-stein-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconHandRock className="w-5 h-5 inline-block" />
            <div>Stein</div>
          </div>
        ),
        href: '/tema/stein'
      },
      'tid-og-rom': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-tidrom-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconClock className="w-5 h-5 inline-block" />
            <div>Tid og rom</div>
          </div>
        ),
        href: '/tema/tid-og-rom'
      },
      'vann-vaer-og-vind': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-vaer-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconCloudRain className="w-5 h-5 inline-block" />
            <div>Vann, vær & vind</div>
          </div>
        ),
        href: '/tema/vann-vaer-og-vind'
      },
      'vekster': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-vekster-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconPlant className="w-5 h-5 inline-block" />
            <div>Vekster</div>
          </div>
        ),
        href: '/tema/vekster'
      },
    }
  },
  'om': {
    title: 'Om',
    type: 'page',
    theme: {
      toc: false
    }
  },
  'kontakt': {
    title: 'Kontakt',
    type: 'page',
    theme: {
      toc: false
    }
  },
}

export default meta;
