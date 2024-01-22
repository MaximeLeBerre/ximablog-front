import styles from './article.module.css'
import Image from "next/image";
import Link from "next/link";

export const Article = ({id, data}) => {
    return <Link href={`/articles/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.main}>
                <Image  src={"http://localhost:1337" + data.cover.data.attributes.url} alt={"cover"} width={200} height={200}/>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.desc}>{data.introduction}</p>
                </div>
            </div>
        </Link>
}