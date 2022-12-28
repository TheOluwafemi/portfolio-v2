import React from 'react'
import Button from '../../ui/button/Button '
import styles from './Hero.module.scss'
import Star from '../../../public/icons/star-white-big.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollSpinner from '../../ui/scroll-spinner/ScrollSpinner'

export default function Hero() {
  return (
    <div className={styles.hero} data-scroll-section>
      <motion.div
        style={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 1,
          type: 'spring',
          velocity: 15,
          bounce: 40,
          damping: 5,
          stiffness: 50,
          repeat: 0,
        }}
        className={styles.name}
        data-scroll
        data-scroll-speed="2"
        data-scroll-position="top"
        data-scroll-repeat="true"
      >
        <Button data-scroll data-scroll-speed="2" link="/">
          Hi, I&quot;m Damilola Oluwafemi ✌🏽
        </Button>
      </motion.div>

      <div className={styles.starTop}>
        <Image src={Star} alt="star" height={35} width={35} />
      </div>

      <div className={styles.starBtm}>
        <Image src={Star} alt="star" height={25} width={25} />
      </div>

      <motion.div
        className={styles.title}
        style={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0,
          repeat: 0,
          duration: 0.7,
          type: 'tween',
          ease: ['easeIn'],
        }}
      >
        <div className={styles.frontend} data-scroll data-scroll-speed="2">
          <p>Frontend</p>
        </div>
      </motion.div>

      <motion.div
        className={styles.quote}
        style={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
          repeat: 0,
          type: 'tween',
          ease: ['easeIn'],
        }}
      >
        <p className="text" data-scroll data-scroll-speed="2">
          “Great things are done by a series of <br /> small things brought
          together.”
          <br />- Vincent Van Gogh
        </p>
      </motion.div>

      <motion.div
        className={styles.title}
        style={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.7,
          repeat: 0,
          type: 'tween',
          ease: ['easeIn'],
        }}
      >
        <div className={styles.engineer} data-scroll data-scroll-speed="2">
          <p>Engineer</p>
        </div>
      </motion.div>

      <div className={styles.scroll}>
        <ScrollSpinner />
      </div>
    </div>
  )
}
