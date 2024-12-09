import { getPartners } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

import * as styles from './footer.module.css'

const Footer = async () => {
  const partnersData = await getPartners()

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
    </div>
  )
}

export default Footer
