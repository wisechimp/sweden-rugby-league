import { fetchMenu } from '@/actions'
import MenuItem from './MenuItem'

import Logo from '../../images/srllogo.png'

import * as styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

type MenuDropdownButtonType = {
  menu: string
}

const MenuDropdownButton = ({ menu }: MenuDropdownButtonType) => {
  const menupopover = `menupopover-${menu}`
  const menuData = fetchMenu(menu)

  return (
    <div className={styles.menuButtonContainer}>
      <button popoverTarget={menupopover} popoverTargetAction="toggle">
        {menu}
      </button>
      <div id={menupopover} popover="" className={styles.menuDropdownContainer}>
        <MenuItem data={menuData!} menuPopover={menupopover} />
        <div className={styles.menuDropdownLogo}>
          <Link href="/">
            <Image src={Logo} alt="Sweden Rugby League's Logo featuring the three crowns." />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuDropdownButton
