'use client'

import clsx from "clsx";
import { HeaderItem, HeaderItems } from "../header.ports";
import Link from "next/link";
import { usePathname } from 'next/navigation'

interface IAllHeaderItems {
  horizontal?: boolean;
}

const AllHeaderItems = ({ horizontal = false }: IAllHeaderItems) => {
  const pathname = usePathname()

  const recursiveHeaders = (item: HeaderItem) => {
    if (!item.children) {
      const isActive = pathname === item.href;

      return (
        <li key={item.title}  className='px-1'>
          <Link
            href={item.href}
            className={isActive ? "active" : ""}>
            {item.title}
          </Link>
        </li>
      )
    }

    return (
      <li tabIndex={0} key={item.title} className='px-1'>
        <details>
          <summary>
            <Link href={item.href} className={clsx(horizontal ? 'justify-between' : '')}>
              {item.title}
            </Link></summary>
          <ul className="p-2 bg-neutral">
            {
              item.children.map((child) => {
                return recursiveHeaders(child)
              })
            }
          </ul>
        </details>
      </li>
    )
  }

  return (
    <>
      {
        HeaderItems.map((item) => {
          return recursiveHeaders(item);
        })
      }
    </>
  )
}

export default AllHeaderItems;
