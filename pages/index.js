import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleCard from '../components/article/ArticleCard'

export default function Home({ articles }) {
  return (
    <div className={styles.container}>

      <main>
      <h1>ああああいういういういういう</h1>
        <div>
          {articles.map((articles) => (
            <ArticleCard
            articles={articles}
            key={articles.id}
            >
            </ArticleCard>
          ))}
        </div>
      </main>

    </div>
  )
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }
  const data = await fetch('https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount
    },
  }
}