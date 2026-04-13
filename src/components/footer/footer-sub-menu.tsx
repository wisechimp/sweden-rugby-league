import Image from "next/image";
import Link from "next/link";

import { fetchMenu } from "@/actions";
import SmallBalls from "@/images/smaller-balls.png";

import * as styles from "./footer.module.css";

type FooterSubMenuProps = {
  subMenu: string;
};

const FooterSubMenu = ({ subMenu }: FooterSubMenuProps) => {
  const footerSubMenu = fetchMenu(subMenu);
  return (
    <div className={styles.footerSubMenu}>
      <p>{subMenu}</p>
      {footerSubMenu?.map((menuItem) => (
        <div key={menuItem.key} className={styles.footerSubMenuItem}>
          <Image
            src={SmallBalls}
            alt="A small rugby ball taking the place of a traditional list marker"
          />
          <Link href={menuItem.link}>{menuItem.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default FooterSubMenu;
