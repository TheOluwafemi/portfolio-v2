import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

export type ButtonProps = {
  children: ReactNode
  link: string
}

const Button: FC<ButtonProps> = ({ children, link }) => {
  if (link.charAt(0) === '#')
    return (
      <a href={link} data-scroll-to>
        <button className={styles.btn}>{children}</button>
      </a>
    )
  else if (link.charAt(0) === 'h')
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={styles.btn}>{children}</button>
      </a>
    )
  else
    return (
      <Link href={link} passHref>
        <button className={styles.btn}>{children}</button>
      </Link>
    )
}

export default Button
