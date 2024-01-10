import styles from './page.module.css'
import {LastArticles}  from "@/app/_components/articles/LastArticles";

export default function Home() {

  return (
    <div className={styles.main}>
        <section className={styles.hero}>
            <h1>Je documente ma vie de dev</h1>
            <div><span>Articles.</span><span>Pensées.</span><span>Expériences.</span></div>
        </section>
        <LastArticles />
    </div>
  )
}


