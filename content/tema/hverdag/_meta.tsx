import { IconCalendar } from '@tabler/icons-react';

const meta = {
  'root_link': {
    title: (
      <div className="flex flex-row items-center gap-1 justify-self-stretch text-md md:text-xl">
        <IconCalendar className="w-5 h-5 inline-block" />
        <div>Hverdag</div>
      </div>
    ),
    href: '/tema/hverdag',
  },
  'annerledeshverdag': {
    type: 'doc',
  },
  'skillingsviser': {
    type: 'doc',
  },
  'farging-av-toey': {
    type: 'doc',
  },
  'klesvask': {
    type: 'doc',
    href: 'https://marcus.uib.no/search/?q=klesvask&filter=type.exact%23Fotografi&filter=subject.exact%23Klesvask&size=20',
  },
}

export default meta;