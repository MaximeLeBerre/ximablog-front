import styles from './lastArticles.module.css'
import {Article} from "@/app/_components/article";

async function getLastArticles() {
    const response = await fetch('http://localhost:1337/api/articles?populate=*&pagination[limit]=3&sort[0]=createdAt:desc')
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
}

export const  LastArticles = async () => {
    const articles = await getLastArticles()
    console.log("data", articles)
    return (
        <section className={styles.main}>
            <h2 className={styles.title}>Derniers articles</h2>
            <div>{articles.data.map(article =>
                <Article id={article.id} data={article.attributes} key={article.id}/>)}
            </div>
        </section>
    )
}