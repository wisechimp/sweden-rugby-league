"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { fetchMenu } from "@/actions";

import Logo from "../../images/srllogo.png";
import * as styles from "./menu.module.css";
import MenuItem from "./MenuItem";

type MenuDropdownButtonType = {
  menu: string;
};

const MenuDropdownButton = ({ menu }: MenuDropdownButtonType) => {
  const [iconRotated, setIconRotated] = useState(false);
  const menupopover = `menupopover-${menu}`;
  const menuData = fetchMenu(menu);
  const rotateIcon = () => {
    setIconRotated(!iconRotated);
  };

  // https://youtu.be/4hJomamEBfs?si=Fwt8elyGGaySdGBs&t=805

  return (
    <div className={styles.menuButtonContainer}>
      <button
        popoverTarget={menupopover}
        popoverTargetAction="toggle"
        onClick={rotateIcon}
        className={styles.menuButton}
      >
        {menu}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 20 20"
          fill="none"
          nav-link-icon=""
          className={styles.menuNavIcon}
        >
          <path
            transform={
              !iconRotated
                ? "translate(-2.6, -1.3)"
                : "translate(2.6, 1.3) rotate(180 10 10)"
            }
            d="M6.5 9L12.5 15L18.5 9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div id={menupopover} popover="" className={styles.menuDropdownContainer}>
        <MenuItem data={menuData!} menuPopover={menupopover} />
        <div className={styles.menuDropdownLogo}>
          <Link href="/">
            <Image
              src={Logo}
              alt="Sweden Rugby League's Logo featuring the three crowns."
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdownButton;
