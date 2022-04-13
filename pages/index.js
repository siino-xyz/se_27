// import styles from '../styles/Home.module.css'
import styles from '../styles/pages/index.module.scss'

import ArticleCard from '../components/ArticleCard'
import Button from '../components/LinkButton'

import ToppageLayout from '../layouts/ToppageLayout'
import InnerLayout from '../layouts/InnerLayout'

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
      <Button 
        button={'ボタンのサンプル'}
      />
    </div>
  )
}

Home.getLayout = function getLayout(home) {
  return (
    <ToppageLayout>
      <InnerLayout>{home}</InnerLayout>
    </ToppageLayout>
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