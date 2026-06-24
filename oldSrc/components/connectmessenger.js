import React from  "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import messyLogo from "../images/messengerlogo.svg"
import styles from "./connectmessenger.module.css"

export default () => (
  <div className={styles.connectMessenger}>
    <img
      className={styles.messyLogo}
      src={messyLogo}
      alt="Facebook's Messenger logo"
    />
    <p>
      <OutboundLink
        className={styles.messageButt}
        href="https://m.me/swedenrugbyleague"
      >
          Connect with us on Messenger
      </OutboundLink>
    </p>
  </div>
)
