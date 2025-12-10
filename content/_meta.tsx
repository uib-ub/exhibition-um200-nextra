import { 
    IconFish, 
    IconTower, 
    IconBuildingChurch, 
    IconGlass, 
    IconHeart, 
    IconHorse, 
    IconCalendar, 
    IconWorld, 
    IconClock, 
    IconCloudRain, 
    IconPlant, 
    IconMountain, 
    IconPencil 
} from '@tabler/icons-react';

const meta = {
  '*': {
    theme: {
      timestamp: false,
      breadcrumb: false,
    }
  },
  'index': {
    title: '200 år med vidunderlig vitenskap',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      toc: false
    }
  },
  'fra-landslov-til-bylov': {
    title: 'Fra Landslov til Bylov',
    type: 'page',
  },
  'bergens-bylov': {
    title: 'Bergens Bylov',
    type: 'page'
  },
  'byloven-og-andre-lover': {
    title: 'Byloven og andre lover',
    type: 'page'
  },
  'bylovens-etterliv': {
    title: 'Bylovens etterliv',
    type: 'page'
  },
  'kreditering': {
    title: 'Kreditering',
    type: 'page'
  }
  /*
  'tema': {
    title: 'Tema',
    type: 'menu',
    items: {
      'arkeologi': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-arkeologi-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconTower className="w-5 h-5 inline-block" />
            <div>Arkeologi</div>
          </div>
        ),
        href: '/tema/arkeologi'
      },
      'bokstaver-og-tegn': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-tegn-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconPencil className="w-5 h-5 inline-block" />
            <div>Bokstaver og tegn</div>
          </div>
        ),
        href: '/tema/bokstaver-og-tegn'
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
            <IconMountain className="w-5 h-5 inline-block" />
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
      'verden-i-bergen': {
        title: (
          <div className="flex flex-row items-center gap-1 bg-um-utland-tint px-2 py-1 rounded-md justify-self-stretch">
            <IconWorld className="w-5 h-5 inline-block" />
            <div>Verden i Bergen</div>
          </div>
        ),
        href: '/tema/verden-i-bergen'
      },
    }
  },
  */
  /*
  'menneskene': {
    title: 'Menneskene',
    type: 'page',
    theme: {
      layout: 'full',
      toc: false,
    }
  },
  'ressurser': {
    title: 'Ressurser',
    type: 'page',
  },
  'samlingene-og-tilvekst': {
    title: 'Samlingene og tilvekst',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      toc: false,
    }
  },
  'samlinger-paa-flyttefot': {
    title: 'Samlinger på flyttefot',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'full',
      toc: false,
    }
  },
  'documentation': {
    title: 'Dokumentasjon',
    type: 'page',
    display: 'hidden',
    theme: {
      toc: false
    }
  }
  */
}

export default meta;
