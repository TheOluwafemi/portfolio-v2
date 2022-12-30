import React from 'react'
import ListItem from '../../ui/list-item/ListItem'
import styles from './MyArticles.module.scss'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const articlesList = [
  {
    link: 'https://www.educative.io/answers/what-is-npx',
    heading: 'What is NPX?',
    desc: 'NPX is an NPM package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM...',
  },
  {
    link: 'https://www.educative.io/answers/mvc-explained',
    heading: 'MVC Explained',
    desc: 'Here’s a brief explanation of the Model-View-Controller architectural pattern popularly referred to as MVC...',
  },
  {
    link: 'https://medium.com/@The_Oluwafemi/getting-started-with-vue-f654da6125dc',
    heading: 'Getting Started with Vue',
    desc: 'Vue is a javascript framework for building user interfaces. It is capable of powering sophisticated Single -Page Applications (SPAs)...',
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
              <ListItem heading={art.heading} desc={art.desc} link={art.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
