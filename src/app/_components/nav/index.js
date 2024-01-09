import Link from "next/link";
import styles from './nav.module.css'

export const Nav = () => {
    return <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>📝 Ximablog</Link>
        <Link className={styles.link} href="/articles">/articles</Link>
    </nav>
}