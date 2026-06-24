'use client'
import Link from 'next/link'
import MenuItemType from '@/types/MenuItem'

import * as styles from './menu.module.css'

type MenuItemProps = {
  data: Array<MenuItemType>
  menuPopover: string
}

const MenuItem = ({ data, menuPopover }: MenuItemProps) => {
  const handleClosePopover = () => {
    const popover = document.getElementById(menuPopover)
    popover?.togglePopover()
  }
  return (
    <div className={styles.menuDropdown}>
      {data.map((menuitem) => {
        const { key, title, link } = menuitem
        return (
          <div key={key}>
            <button onClick={handleClosePopover}>
              <Link href={link}>{title}</Link>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default MenuItem
