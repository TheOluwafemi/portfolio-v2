import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Damilola Oluwafemi | Portfolio</title>
        <meta
          name="description"
          content="Creative web developer based in Lagos, Nigeria."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>hello</main>
    </div>
  )
}
