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
