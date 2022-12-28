import React from 'react'
import ListItem from '../../ui/list-item/ListItem'
import styles from './MyArticles.module.scss'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const articlesList = [
  {
    link: '#',
    heading: 'What is NPX?',
    desc: '2020',
  },
  {
    link: '#',
    heading: 'MVC Explained',
    desc: '2020',
  },
  {
    link: '',
    heading: 'Getting Started with Vue',
    desc: '2020',
  },
]

export default function MyArticles() {
  const { scroll } = useLocomotiveScroll()

  return (
    <section className="section" data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <h2 className="title">Articles</h2>
      </div>

      <div className={styles.artContent}>
        <div className={styles.list} data-scroll data-scroll-speed="1">
          {articlesList.map((art, index) => (
            <div key={index} className={styles.listItem}>
              <ListItem heading={art.heading} desc={art.desc} link="#" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
