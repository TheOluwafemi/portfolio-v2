import React from 'react'
import Button from '../../ui/button/Button '
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.name}>
        <Button link="/">Hi, I&quot;m Damilola Oluwafemi ✌🏽</Button>
      </div>

      <div className={styles.title}>
        <div className={styles.frontend}>
          <p>Frontend</p>
        </div>
      </div>

      <div className={styles.quote}>
        <p>
          “Great things are done by a series of small things brought together.”
          <br />- Vincent Van Gogh
        </p>
      </div>

      <div className={styles.title}>
        <div className={styles.engineer}>
          <p>Engineer</p>
        </div>
      </div>
    </div>
  )
}
