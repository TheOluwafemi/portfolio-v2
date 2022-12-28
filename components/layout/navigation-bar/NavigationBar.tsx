import Image from 'next/image'
import React from 'react'
import Button from '../../ui/button/Button '
import styles from './NavigationBar.module.scss'
import Logo from '../../../public/icons/dami-logo-white.svg'
import Dark from '../../../public/icons/dark-sun.svg'

export default function NavigationBar() {
  return (
    <nav className={styles.nav} data-scroll-section>
      <div
        className={`container ${styles.wrapper}`}
        data-scroll
        data-scroll-position="top"
        data-scroll-repeat="true"
      >
        <div className={styles.logo}>
          <Image src={Logo} alt="damilola oluwafemi"></Image>
        </div>

        <ul className={styles.menu}>
          {/* <li className={styles.menuItem}>
            <Image
              src={Dark}
              width="30"
              height="30"
              alt="damilola oluwafemi"
            ></Image>
          </li> */}
          <li className={`${styles.menuItem} ${styles.itemHome}`}>
            <Button link="/">Home</Button>
          </li>
          <li className={`${styles.menuItem} ${styles.itemAbout}`}>
            <Button link="#about">About</Button>
          </li>
          <li className={`${styles.menuItem} ${styles.itemWork}`}>
            <Button link="#projects">Projects</Button>
          </li>
          <li className={styles.menuItem}>
            <Button link="/blog">Blog</Button>
          </li>
          <li className={`${styles.menuItem} ${styles.itemContact}`}>
            <Button link="#contact">Contact</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
