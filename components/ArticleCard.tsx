import Link from 'next/link'
import Articles from '../types/articleTypes'
import Image from 'next/image' 


const ArticleCard = ({ articles }: {
  articles: Articles
}) => {
  return (
    <>
    <div>
      <Link href={`/articles/${articles.id}`} passHref>
        <a>
          <div>
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

      <div>
        <div>
          {articles.categories.name}
        </div>
        
        <Link href={`/articles/${articles.id}`} passHref>
          <a>
            <h2>
            {articles.title}
            </h2>
          </a>
        </Link>

        <div>
          <div>
            {articles.publishedAt}
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default ArticleCard