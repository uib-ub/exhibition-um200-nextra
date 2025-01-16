import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  i18n: {
    locales: ['no', 'en'],
    defaultLocale: 'no'
  },
});
