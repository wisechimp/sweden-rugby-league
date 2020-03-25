import React, { useState } from "react"
import { Link } from 'gatsby'

import Hamburger from './hamburger'
import SocialMediaLinks from "./socialmedialinks"
import menuStyles from './menu.module.css'

const Menu =  props => {
  const [flippingBurger, setFlippingBurger] = useState(false)

  const drawerHandler = () => {
    if (flippingBurger) {
      return setFlippingBurger(false)
    }
    setFlippingBurger(true)
  }

  return (
    <div className={menuStyles.actionBar}>
      <Hamburger
        flipper={drawerHandler}
        flippingBurger={flippingBurger}
        setFlippingBurger={setFlippingBurger}
      />
      <div className={`${menuStyles.navUnit} ${!flippingBurger ? '' : menuStyles.open}`} >
        <ul className={menuStyles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/latest-news">News</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to="/clubs">Clubs</Link>
          </li>
          <li>
            <Link to="/contact">About</Link>
          </li>
        </ul>
        <div className={menuStyles.socialButts}>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}

export default Menu
