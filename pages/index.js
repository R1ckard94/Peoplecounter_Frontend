import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <title>People Counter</title>
      </header>
      <h1 className={styles.MainText} >People Counter på Atea!</h1>
      <main className={styles.main}>
      
        <div className={styles.card}>
        
        </div>
        <div className={styles.card}>
        
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          
        </a>
      </footer>
    </div>
  )
}
