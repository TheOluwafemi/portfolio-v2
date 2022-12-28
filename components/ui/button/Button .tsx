import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonProps = {
  children: ReactNode
  link: string
} 

const Button: FC<ButtonProps> = ({ children, link }) => {
  return link.charAt(0) === '#' ? (
    <a href={link} data-scroll-to>
      <button className={styles.btn}>{children}</button>
    </a>
  ) : (
    <Link href={link} passHref>
      <button className={styles.btn}>{children}</button>
    </Link>
  )
}

export default Button
