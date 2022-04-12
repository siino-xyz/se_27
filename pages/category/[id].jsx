import Link from 'next/link'
import { client } from '../../libs/client'
import Pagination from '../../components/Pagination'


export const CategoryId = ({ articles ,totalCount}) => {
  if(articles.length === 0) {
    return <div>no blog contents</div>
  }
  return (
    <div>
      <ul>
        {articles.map((articles) => (
          <li key={articles.id}>
            <Link href={`/articles/${articles.id}`}>
              <a>{articles.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  )
}

export default CategoryId;

export const getStaticPaths = async () => {
  const data = await client.get({endpoint: 'categories'})

  const paths = data.contents.map((content) => `/category/${content.id}`)
  return {paths, fallback: false};
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", queries: { filters: `categories[equals]${id}` } });
  const categoryData = await client.get({ endpoint: 'categories'});


    //get pagination props
    const key = {
      headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
    }
    const pagination = await fetch('https://kp822wg687.microcms.io/api/v1/categories?offset=0&limit=5', key)
    .then(res => res.json())
    .catch(() => null);



  // console.log(id);
  return { 
    props: {
      articles: data.contents,
      categories: categoryData.contents,
      totalCount: pagination.totalCount,

    }
  }
}