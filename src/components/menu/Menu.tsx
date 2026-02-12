import menudata from './menu-data'
import MenuItem from './MenuItem'

import * as styles from './menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      {menudata.map((menuItem) => {
        return <MenuItem key={menuItem.key} data={menuItem} />
      })}
    </div>
  )
}

export default Menu
