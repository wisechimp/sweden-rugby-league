import * as styles from './menu.module.css'
import MenuDropdownButton from './menu-dropdown-button'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <MenuDropdownButton menu="National Team" />
      <MenuDropdownButton menu="Clubs" />
      <MenuDropdownButton menu="About" />
    </nav>
  )
}

export default Menu
