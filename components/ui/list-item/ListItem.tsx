import React, { FC } from 'react'
import styles from './ListItem.module.scss'
import ArrowRight from '../../../public/icons/arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'

export type ListItemProps = {
  heading: string
  desc: string
  link: string
  date?: string
}

const ListItem: FC<ListItemProps> = ({ link, heading, desc, date }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer noopener'>
      <div className={styles.item}>
        <div className={styles.heading}>
          <h3>{heading}</h3>
          <Image src={ArrowRight} alt="arrow right - go to item" />
        </div>

        <small className={styles.desc}>{desc}</small>

        <small className={styles.date}>{date}</small>
      </div>
    </a>
  )
}

export default ListItem
