import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container } from '@chakra-ui/layout'




export default function Home() {
  return (
    <Container>
      <Container className={styles.sidePanel}>

      </Container>
      <Container className={styles.container}>
        <header>
          <title>People Counter</title>
        </header>
        <h1 className={styles.MainText} >People Counter på Atea!</h1>

        <main className={styles.main}>

          <Container className={styles.card}>

          </Container>
          <div className={styles.card}>

          </div>
        </main>

        <footer className={styles.footer}>
          <a>

          </a>
        </footer>
      </Container>

    </Container>
  )
}
