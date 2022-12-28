import React from 'react'
import styles from './ScrollSpinner.module.scss'
import LongArrow from '../../../public/icons/long-arrow.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ScrollSpinner() {
  return (
    <motion.div
      className={styles.spinner}
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
      }}
    >
      <svg
        className={styles.spinnerSvg}
        xmlns="http://www.w3.org/2000/svg"
        xmlLang="en"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
      >
        <title>Scroll to explore</title>
        <defs>
          <path
            id="textCircle"
            d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <g className="textCircle">
          <text>
            <textPath
              xlinkHref="#textCircle"
              aria-label="scroll to explore"
              textLength="940"
            >
              &nbsp;Scroll . to . explore .
            </textPath>
          </text>
        </g>
      </svg>

      <Image
        className={styles.arrow}
        src={LongArrow}
        alt="scroll to explore"
        height={100}
      />
    </motion.div>
  )
}
