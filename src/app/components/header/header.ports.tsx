export type HeaderItem = {
  title: string,
  href: string,
  children?: HeaderItem[]
}

export const HeaderItems: HeaderItem[] = [
  {
    title: 'Timeline',
    href: '/timeline'
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]

export enum Themes {
  LIGHT = 'pastel',
  DARK = 'dark',
}