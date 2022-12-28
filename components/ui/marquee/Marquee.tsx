import React from 'react'
import styles from './Marquee.module.scss'
import BlueStar from '../../../public/icons/blue-burst-star-small.svg'
import Image from 'next/image'

export default function Marquee() {
  return (
    <section className="" data-scroll-section>
      <div className={styles.marquee}>
        <div
          className={styles.textSlider}
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          <p>Javascript</p>
          <Image src={BlueStar} alt="blue-star" width={24} height={24} />
          <p>CSS </p>
          <Image src={BlueStar} alt="blue-star" />
          <p>Typescript</p>
          <Image src={BlueStar} alt="blue-star" />
          <p>HTML</p>
          <Image src={BlueStar} alt="blue-star" />
          <p>Vue </p>
          <Image src={BlueStar} alt="blue-star" />
          <p>React </p>
          <Image src={BlueStar} alt="blue-star" />
          <p>Nuxt </p>
          <Image src={BlueStar} alt="blue-star" />
          <p>Accessibility *</p>
        </div>
      </div>
    </section>
  )
}
