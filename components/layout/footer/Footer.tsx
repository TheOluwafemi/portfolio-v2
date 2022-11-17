import React from 'react'
import Button from '../../ui/button/Button ';
import styles from './Footer.module.scss'
import Link from 'next/link'

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.year}>
         &copy; { year }
        </div>

        <div className={styles.socials}>
          <Button link='https://github.com/theoluwafemi'>Github</Button>
          <Button link='https://twitter.com/dammyskillz_'>Twitter</Button>
          <Button link='https://linkedin.com/in/damilola-oluwafemi/'>LinkedIn</Button>
        </div>

        <div className={styles.design}>
          Design by <Link className={styles.link} href="https://twitter.com/the_sagie">Sagie</Link>
          
        </div>


      </div>
    </div>
  )
}
