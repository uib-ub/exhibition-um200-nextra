import { IconGlass } from '@tabler/icons-react'

const meta = {
  'root_link': {
    title: (
      <div className="flex flex-row items-center gap-1 justify-self-stretch text-md md:text-xl">
        <IconGlass className="w-5 h-5 inline-block" />
        <div>Glass</div>
      </div>
    ),
    href: '/tema/glass',
  },
  'om-bergens-glarmesterlaug': {
    title: 'Om Bergens Glasmesterlaug',
    href: 'https://marcus.uib.no/topic/667c8a39-4444-49e3-8f51-bcf04f5d0ed5',
  },
  'etnografiske-gjenstander-i-glass': {
    title: 'Etnografiske gjenstander i glass',
    href: 'https://www.unimus.no/portal/#/search/things?freetext=glass&requirePhoto=false&collectionType=Etnografi&museum=UM&limit=100',
  },
  'drikkeglass-paa-bryggen-i-bergen-1300-1700': {
    title: 'Drikkeglass på Bryggen i Bergen 1300-1700',
    href: 'https://glass.app.uib.no/',
  },
  'octavia-sperati': {
    title: 'Octavias epergne!',
    type: 'doc',
  },
  'statsminister-michelsens-doedsbo': {
    title: 'Statsminister Michelsens dødsbo',
    type: 'doc',
    display: 'hidden',
  },
}

export default meta;