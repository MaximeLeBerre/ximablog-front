import Link from "next/link";
import styles from './nav.module.css'

export const Nav = () => {
    return <nav className={styles.nav}>
        <div>Logo</div>
        <div><Link href="/articles">/articles</Link></div>
    </nav>
}