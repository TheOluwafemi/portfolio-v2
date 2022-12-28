import { useRef } from 'react'
import Head from 'next/head'
import About from '../components/home/about/About'
import Contact from '../components/home/contact/Contact'
import Experience from '../components/home/experience/Experience'
import Hero from '../components/home/hero/Hero'
import MyArticles from '../components/home/my-articles/MyArticles'
import Projects from '../components/home/projects/Projects'
import styles from '../styles/Home.module.scss'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NavigationBar from '../components/layout/navigation-bar/NavigationBar'
import Footer from '../components/layout/footer/Footer'
import Marquee from '../components/ui/marquee/Marquee'

const Home = () => {
  const containerRef = useRef(null)

  return (
    <>
      <Head>
        <title>Damilola Oluwafemi | Portfolio</title>
        <meta
          name="description"
          content="Creative web developer based in Lagos, Nigeria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.06 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div ref={containerRef} data-scroll-container id="scroll-container">
          <NavigationBar />

          <main className={`${styles.main} container`}>
            <Hero />
            <About />
            <Experience />
            <Marquee/>
            <Projects />
            <MyArticles />
            <Contact />
          </main>

          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Home
