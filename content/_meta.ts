const meta = {
  'index': {
    title: 'Universitet i Bergen 200 år',
    type: 'page',
    display: 'hidden',
    theme: {
      layout: 'default',
      toc: false
    }
  },
  'tema': {
    title: 'Tema',
    type: 'menu',
    items: {
      'tema-1': {
        title: 'Tema 1',
        href: '/tema/tema-1'
      },
      'tema-2': {
        title: 'Tema 2',
        href: '/tema/tema-2'
      }
    }
  },
  'om': {
    title: 'Om',
    type: 'page',
  },
  'kontakt': {
    title: 'Kontakt',
    type: 'page',
  },
}

export default meta;
