import Image, { StaticImageData } from "next/image"

import * as styles from './jumbotron.module.css'

type JumbotronProps = {
  imageSrc: StaticImageData,
  imageAltTxt: string
}

const Jumbtron = ({ imageSrc, imageAltTxt }: JumbotronProps) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={imageAltTxt}
        priority
      />
      <p className={styles.captionBox}>A pacy hit up against Norway in 2017</p>
    </div>
  )
}

export default Jumbtron