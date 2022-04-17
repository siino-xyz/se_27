import Link from 'next/link'
import Articles from '../types/articleTypes'
import Image from 'next/image' 
import styles from '../styles/components/articlecard.module.scss'


const ArticleCard = ({ articles }: {
  articles: Articles[];
}) => {
  return (
    <>
      <div className={styles.articlesContainer}>
        {articles.map((articles) => (
          <div key={articles.id} className={styles.cardContainer}>
            <Link href={`/articles/${articles.id}`} passHref>
              <a>
                <div className={styles.eyeCatch}>
                  <Image
                    src={articles.eye_catch.url}
                    width={330}
                    height={190}
                    layout='responsive'
                    alt="eye_catch"
                  />
                </div>
              </a>
            </Link>

            <div className={styles.sumallyWrapper}>
              <div className={styles.categoryTag}>
                {articles.categories.name}
              </div>
              
              <Link href={`/articles/${articles.id}`} passHref>
                <a>
                  <h2 className={styles.title}>
                  {articles.title}
                  </h2>
                </a>
              </Link>

              <div>
                <div className={styles.date}>
                  {articles.publishedAt}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ArticleCard





