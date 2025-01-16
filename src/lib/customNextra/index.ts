/* eslint-disable @typescript-eslint/no-explicit-any */
interface PageData {
  [key: string]: any;
}

interface Page {
  name?: string;
  route?: string;
  children?: Page[];
  data?: PageData;
  [key: string]: any; // For other potential properties
}

export const customPageMap = (localizedPageMap: Page[], data: PageData): Page[] => {
  return localizedPageMap.map((page, index) => {
    if (index === 0 && page.data) {
      return {
        ...page,
        data: {
          ...page.data,
          ...data
        }
      }
    }
    return page
  })
}

export function localizePagemap(config: Page[], lang: string): Page[] {
  return config
    .reduce((acc: Page[], page) => {
      if (page?.name?.includes('[lang]')) {
        return acc.concat(page.children || [])
      }
      return acc.concat(page)
    }, [])
    .map(page => {
      const localizedPage: Page = { ...page }
      if (page.route) {
        if (page.route.includes('[lang]')) {
          localizedPage.route = page.route.replace('[lang]', lang)
        } else {
          localizedPage.route = `/${lang}${page.route}`
        }
      }
      if (page.children) {
        localizedPage.children = localizePagemap(page.children || [], lang)
      }
      return localizedPage
    })
}