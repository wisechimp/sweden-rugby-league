import Link from "next/link";

import FooterSocialMediaLinks from "./footer-social-links";
import FooterSubMenu from "./footer-sub-menu";
import * as styles from "./footer.module.css";

const Footer = async () => {
  // const partnersData = await getPartners();

  return (
    <div className={styles.footerContainer}>
      <h2>We are grateful to our partners for their support:</h2>
      {/* <div className={styles.footerPartnersContainer}>
        {partnersData.map((partner) => (
          <div key={partner._id}>
            <Link href={partner.url}>
              <Image
                src={partner.logo}
                alt={partner.logoAltText}
                width={200}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div> */}
      <div className={styles.footerYourName}>
        <p>
          <strong>Your Logo Here!</strong>
        </p>
        <br />
        <p className={styles.footerLink}>
          <Link href="/contact">Contact</Link> us to learn more.
        </p>
      </div>
      <FooterSocialMediaLinks />
      <div className={styles.footerMenus}>
        <FooterSubMenu subMenu="National Team" />
        <FooterSubMenu subMenu="Clubs" />
        <FooterSubMenu subMenu="About" />
      </div>
    </div>
  );
};

export default Footer;
