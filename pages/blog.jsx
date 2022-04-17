import {client} from '../libs/client'
import ArticleCard from '../components/ArticleCard'
import styles from '../styles/pages/blog.module.scss'
import InnerLayout from '../layouts/InnerLayout'
import { PER_PAGE } from './api/pager';
import PaginationArrow from '../components/Pagination'
import BlogLayout from '../layouts/BlogLayout'
import BlogHeader from '../components/blogHeader'

export default function Blog({ articles , categories , totalCount }) {
  return (
    <>
    <BlogHeader 
      categories={categories}
    />
    <div className={styles.container}>
  
      <ArticleCard  articles={articles}/>
      <PaginationArrow
        currentPageNumber={1}
        maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
      />
    </div>
    </>
  )
}


Blog.getLayout = function getLayout(blog) {
  return (
    <BlogLayout>
      <InnerLayout>{blog}</InnerLayout>
    </BlogLayout>
  )
}

export const getStaticProps = async () => {
  const categoryData = await client.get({ endpoint: 'categories'});

  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }
  const data = await fetch('https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=2', key)
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

