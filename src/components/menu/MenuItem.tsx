import MenuItemType from '@/types/MenuItem'
import Link from 'next/link'

import * as styles from './menu.module.css'

type MenuItemProps = {
  data: MenuItemType
}

const MenuItem = ({ data }: MenuItemProps) => {
  const { title, Icon, link } = data
  return (
    <div className={styles.menuItemContainer}>
      <Link href={link}>{title}</Link>
      <Icon />
    </div>
  )
}

export default MenuItem
