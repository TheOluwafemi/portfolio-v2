import React from 'react'
import Button from '../../ui/button/Button '
import ListItem from '../../ui/list-item/ListItem'
import styles from './Experience.module.scss'

const experienceList = [
  {
    link: 'https://upflow.io',
    heading: 'Upflow',
    desc: 'Senior Frontend-Engineer',
    date: '2022 - present',
  },
  {
    link: 'https://yellowcard.io',
    heading: 'Yellowcard financials',
    desc: 'Frontend-Engineer',
    date: '2021 - 2022',
  },
  {
    link: 'https://sterling.ng',
    heading: 'Sterling bank plc',
    desc: 'Frontend-Engineer',
    date: '2019 - 2021',
  },
  {
    link: 'https://fidelitybank.ng',
    heading: 'fidelity bank plc',
    desc: 'Frontend-Engineer',
    date: '2018 - 2019',
  },
]

export default function Experience() {
  return (
    <section className="section" data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <h2 className="title">Experience</h2>
      </div>

      <div className={styles.expContent} data-scroll data-scroll-speed="1">
        <div className={styles.list}>
          {experienceList.map((exp, index) => (
            <div key={index} className={styles.listItem}>
              <ListItem heading={exp.heading} desc={exp.desc} link={exp.link} date={exp.date} />
            </div>
          ))}
        </div>

        <div className={styles.download}>
          <Button link='https://drive.google.com/uc?export=download&id=1SH2xAcdngAYQcfHUs1mp_LF_0XUtoio6'> Download Resume</Button>
        </div>

      </div>
    </section>
  )
}
