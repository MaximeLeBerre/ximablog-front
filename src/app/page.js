import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <section className={styles.hero}>
            <h1>Je documente ma vie de dev</h1>
            <div><span>Articles.</span><span>Pensées.</span><span>Expériences.</span></div>
        </section>

    </main>
  )
}
