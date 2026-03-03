import { fetchMenu } from '@/actions'
import MenuItem from './MenuItem'

import * as styles from './menu.module.css'

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
      </div>
    </div>
  )
}

export default MenuDropdownButton
