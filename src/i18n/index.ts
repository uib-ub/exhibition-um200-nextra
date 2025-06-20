import 'server-only'

export type Locale = 'en' | 'no'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  no: () => import('./dictionaries/no.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

export const getDirection = () => 'ltr'

export const LOCALES = ['en', 'no'] as const

export const DEFAULT_LOCALE = 'en' as const

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale)
}

// Format dates based on locale
export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'no' ? 'nb-NO' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Format numbers based on locale
export function formatNumber(num: number, locale: Locale) {
  return new Intl.NumberFormat(locale === 'no' ? 'nb-NO' : 'en-US').format(num)
} 