import Image from "next/image";
import Link from "next/link";

import Logo from "../../images/srllogo.png";
import Hamburger from "./hamburger";
import MenuDropdownButton from "./menu-dropdown-button";
import * as styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <div className={styles.menuContainerLeft}>
        <MenuDropdownButton menu="National Team" />
        <MenuDropdownButton menu="Clubs" />
        <MenuDropdownButton menu="About" />
      </div>
      <div className={styles.menuContainerCenter}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Sweden Rugby League's Logo featuring the three crowns."
          />
        </Link>
      </div>
      <div className={styles.menuContainerRight}>
        <Link href="./contact">Contact</Link>
        <Link href="./get-involved">Join Us!</Link>
      </div>
      <div className={styles.menuHamburger}>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Menu;
