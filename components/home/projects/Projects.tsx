import React from 'react'
import style from './Projects.module.scss'
import ListItem from '../../ui/list-item/ListItem'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Projects() {
  const { scroll } = useLocomotiveScroll()

  return (
    <section
      id="projects"
      className={`${style.projects} section`}
      data-scroll-section
    >
      <h3 className="title" data-scroll data-scroll-speed="1">
        Projects
      </h3>

      <article
        className={style.project}
        data-scroll
        data-scroll-speed="1"
        data-scroll-sticky
      >
        <ListItem
          heading="Upflow"
          desc="Account Receivables &nbsp;&nbsp; | &nbsp;&nbsp; Contributor"
          date="2022"
          link="#"
        />
        <ListItem
          heading="Yellowcard"
          desc="Cryptocurrency exchange &nbsp;&nbsp; | &nbsp;&nbsp; Lead Developer"
          date="2021 - 2022"
          link="https://yellowcard.io"
        />
        <ListItem
          heading="Gomoney"
          desc="Digital banking platform &nbsp;&nbsp; | &nbsp;&nbsp; Contributor"
          date="2020 - 2021"
          link="https://gomoney.global"
        />

        <ListItem
          heading="YellowCard academy"
          desc="Cryptocurrency Learning Platform &nbsp;&nbsp; | &nbsp;&nbsp; Lead Developer"
          date="2021 - 2022"
          link="https://academy.yellowcard.io"
        />
      </article>
    </section>
  )
}
