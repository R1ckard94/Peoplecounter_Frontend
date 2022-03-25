import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <title>People Counter</title>
      </header>

      <main className={styles.main}>
        <h1>Välkommen till People counter på Atea</h1>
      </main>

      <footer className={styles.footer}>
        <a>
          
        </a>
      </footer>
    </div>
  )
}
