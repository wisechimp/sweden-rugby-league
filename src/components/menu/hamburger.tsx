"use client";
import { useState } from "react";

import hamburgerStyles from "./hamburger.module.css";

const Hamburger = () => {
  const [flippingBurger, setFlippingBurger] = useState(false);

  const drawerHandler = () => {
    if (flippingBurger) {
      return setFlippingBurger(false);
    }
    setFlippingBurger(true);
  };

  return (
    <div>
      <button
        className={`${hamburgerStyles.hamburger} ${!flippingBurger ? "" : hamburgerStyles.change}`}
        onClick={drawerHandler}
        aria-label="Menu reveal"
        popoverTarget="menudrawerpopover"
        popoverTargetAction="toggle"
      >
        <div className={hamburgerStyles.hamburgerBunTop} />
        <div className={hamburgerStyles.hamburgerMeat} />
        <div className={hamburgerStyles.hamburgerBunBottom} />
      </button>
      <div
        id="menudrawerpopover"
        popover=""
        className={hamburgerStyles.popoverDrawer}
      >
        <p>A menu!</p>
      </div>
    </div>
  );
};

export default Hamburger;
