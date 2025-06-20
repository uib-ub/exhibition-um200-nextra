import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of supported locales
const locales = ['en', 'no']
const defaultLocale = 'en'

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check if there is a cookie with a preferred locale
  const acceptedLanguage = request.headers.get('accept-language') ?? ''
  const preferredLocale = acceptedLanguage.split(',')[0].split('-')[0]

  // Check if the preferred locale is supported
  if (locales.includes(preferredLocale)) {
    return preferredLocale
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)'
  ]
}