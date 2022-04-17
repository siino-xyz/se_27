import PaginationArrow from "../../../components/Pagination";
import ArticleCard from "../../../components/ArticleCard";
import { client } from '../../../libs/client';
import styles from '../../../styles/pages/blog.module.scss'
import UnderpageLayout from "../../../layouts/UnderpageLayout";
import InnerLayout from "../../../layouts/InnerLayout";
import { PER_PAGE } from "../../api/pager";
import Categories from "../../../components/Categories";
import BlogHeader from '../../../components/blogHeader'
import BlogLayout from '../../../layouts/BlogLayout'

export const ArticlePageId = ({
  totalCount,
  currentPageNumber,
  articles,
  categories
} ) => {

  return (
    <>
    <BlogHeader 
      categories={categories}
    />
    <div className={styles.container}>
      <ArticleCard  articles={articles}/>
      <PaginationArrow
        currentPageNumber={currentPageNumber}
        maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
      />
    </div>
    </>
  )
}




export default ArticlePageId


ArticlePageId.getLayout = function getLayout(articlepageid) {
  return (
    <BlogLayout>
      <InnerLayout>{articlepageid}</InnerLayout>
    </BlogLayout>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY},
  }

  const res = await fetch('https://kp822wg687.microcms.io/api/v1/articles', key)

  const repos = await res.json();
  // const pageNumbers = [];

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
  const numId = Number(id);

  //offsetっていうのは、「何個目のコンテンツから取得するか」を指定してる。 
  const data = await fetch(`https://kp822wg687.microcms.io/api/v1/articles?offset=${(numId - 1) * PER_PAGE}&limit=2`, key)
  .then(res => res.json())
  .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
      currentPageNumber: numId,
    },
  };
}


