import React from 'react'
import styles from './About.module.scss'
import Portrait from '../../../public/images/potrait-light.webp'
import Image from 'next/image'
import BurstStar from '../../../public/icons/burst-star-white.svg'

export default function About() {
  return (
    <section id="about" className="section" data-scroll-section>
      <div className={styles.aboutContent}>
        <div
          className={styles.aboutImage}
          data-scroll
          data-scroll-speed="3"
          data-scroll-sticky
        >
          <Image
            src={Portrait}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="potrait of damilola oluwafemi"
          />

          {/* <div className={styles.starTop}>
            <Image src={BurstStar} alt="Star" width={40} height={40} />
          </div> */}
          <div className={styles.starBtm}>
            <Image src={BurstStar} alt="Star" width={25} height={25} />
          </div>
        </div>

        <article className={styles.aboutDesc} data-scroll data-scroll-speed="2">
          <p className="big-text">
            I’m Damilola Oluwafemi, a front-end engineer based in Lagos,
            Nigeria.
          </p>
          <br />
          <p className="big-text">
            Passionate about web technologies, I am focused on creating
            responsive and interactive digital experiences on the web, working
            with different brands and industry leaders.
          </p>
          <br />
          <p className="big-text">
            My hobbies take up a large chunk of my leisure, I love to travel,
            play FIFA, listen to delightful music or loosing myself on the
            internet
          </p>
        </article>
      </div>
    </section>
  )
}
