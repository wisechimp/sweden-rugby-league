import Image, { StaticImageData } from 'next/image'

import * as styles from './jumbotron.module.css'

type JumbotronProps = {
  imageSrc: StaticImageData
  imageAltTxt: string
}

const Jumbtron = ({ imageSrc, imageAltTxt }: JumbotronProps) => {
  return (
    <div>
      <div className={styles.jumbotronImage}>
        <Image src={imageSrc} alt={imageAltTxt} priority />
      </div>
    </div>
  )
}

export default Jumbtron
