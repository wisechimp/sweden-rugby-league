import { getPartners } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

import * as styles from './footer.module.css'
import { fetchMenu } from '@/actions'

const Footer = async () => {
  const partnersData = await getPartners()
  const footerMenuOne = fetchMenu('National Team')
  const footerMenuTwo = fetchMenu('Clubs')
  const footerMenuThree = fetchMenu('About')

  return (
    <div className={styles.footerContainer}>
      <h2>We are grateful to our partners for their support:</h2>
      <div className={styles.footerPartnersContainer}>
        {partnersData.map((partner) => (
          <div key={partner._id}>
            <Link href={partner.url}>
              <Image src={partner.logo} alt={partner.logoAltText} width={200} height={100} />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.footerYourName}>
        <p>
          <strong>Your Logo Here!</strong>
        </p>
        <br />
        <p className={styles.footerLink}>
          <Link href="/contact">Click</Link> for more information.
        </p>
      </div>
      <div className={styles.footerMenus}>
        <div className={styles.footerSubMenu}>
          {footerMenuOne?.map((menuItem) => (
            <Link key={menuItem.key} href={menuItem.link}>
              {menuItem.title}
            </Link>
          ))}
        </div>
        <div className={styles.footerSubMenu}>
          {footerMenuTwo?.map((menuItem) => (
            <Link key={menuItem.key} href={menuItem.link}>
              {menuItem.title}
            </Link>
          ))}
        </div>
        <div className={styles.footerSubMenu}>
          {footerMenuThree?.map((menuItem) => (
            <Link key={menuItem.key} href={menuItem.link}>
              {menuItem.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
