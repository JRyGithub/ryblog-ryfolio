export type HeaderItem = {
  title: string,
  href: string,
  children?: HeaderItem[]
}

export const HeaderItems: HeaderItem[] = [
  {
      title: 'Timeline',
      href: 'timeline'
  },
  {
      title: 'Blog',
      href: 'blog',
      children: [
          {
              title: 'All Blogs',
              href: 'all'
          },
          {
              title: 'UseMemo',
              href: 'useMemo'
          }
      ]
  },
  {
      title: 'Contact',
      href: 'contact'
  }
]

export enum Themes {
  LIGHT = 'pastel',
  DARK = 'dark',
}