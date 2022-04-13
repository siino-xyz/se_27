import {client} from '../libs/client'
// import styles from '../styles/Home.module.css'
import ArticleCard from '../components/ArticleCard'
import Categories from '../components/Categories'
import styles from '../styles/pages/blog.module.scss'

import Pagination from '../components/Pagination'

export default function Blog({ articles , categories , totalCount }) {
  return (
    <div className={styles.container}>
      <main>
        <Categories 
          categories={categories} 
        />
        <div>
          {articles.map((articles) => (
            <ArticleCard
              articles={articles}
              key={articles.id}
            >
            </ArticleCard>
          ))}
        </div>

        <Pagination totalCount={totalCount} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  // const data = await client.get({ endpoint: 'articles' });
  const categoryData = await client.get({ endpoint: 'categories'});

  //get pagination props
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }
  const data = await fetch('https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=5', key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
    },
  };
};

