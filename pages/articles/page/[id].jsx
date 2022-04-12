import Pagination from "../../../components/Pagination";
import ArticleCard from "../../../components/ArticleCard";
import { client } from '../../../libs/client';
const PER_PAGE = 5; 

export const ArticlePageId = ({articles, totalCount}) => {

  return (
    <>
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
    </>
  )
}

export default ArticlePageId

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }

  const res = await fetch('https://kp822wg687.microcms.io/api/v1/articles', key)

  const repos = await res.json();
  const pageNumbers = [];

  const range = (start, end) =>
  [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) =>  `/articles/page/${repo}`)
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const categoryData = await client.get({ endpoint: 'categories'});
  const id = context.params.id;
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }

  const data = await fetch(`https://kp822wg687.microcms.io/api/v1/articles?offset=${(id - 1) * 5}&limit=5`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
    },
  };
}