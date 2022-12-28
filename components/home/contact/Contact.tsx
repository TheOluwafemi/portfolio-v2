import React from 'react'
import Button from '../../ui/button/Button '
import styles from './Contact.module.scss'
import ScrollSpinner from '../../ui/scroll-spinner/ScrollSpinner'

export default function Contact() {
  return (
    <section id='contact' className="section" data-scroll-section>
      <div className={styles.topContent}>
        <div className={styles.getIn} data-scroll data-scroll-speed="1">
          <p className="big-title">Get In</p>
        </div>

        <div
          className={styles.quote}
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="horizontal"
        >
          <p className="text">
            want to say hello, work with me or collaborate on an awesome
            project? be free to reach out
          </p>
        </div>

        <div className={styles.touch} data-scroll data-scroll-speed="1">
          <p className="big-title">Touch</p>
        </div>
      </div>

      <div className={styles.bottomContent}>
        <p>Send a mail</p>
        <Button link="mailto:oluwafemidamilola21@gmail.com">
          oluwafemidamilola21@gmail.com
        </Button>
      </div>

      <div className={styles.scroll}>
        <ScrollSpinner/>
      </div>
    </section>
  )
}
