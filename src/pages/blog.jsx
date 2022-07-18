import { client } from "../../libs/client";
import { PER_PAGE } from "./api/pager";

import styles from "../styles/pages/blog.module.scss";

import InnerLayout from "../layouts/GlobalInner";
import BlogLayout from "../layouts/BlogOuter";

import ArticleCard from "../components/articleCard/ArticleCard";
// import PaginationArrow from "../components/pagination/Pagination";
import Categories from "../components/categories/Categories";

export default function Blog({ articles, categories, totalCount }) {
  return (
    <>
      <div className={styles.container}>
        <Categories categories={categories} />

        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Blog</h2>
          <div className={styles.subscript}>ブログ記事一覧</div>
        </div>
        <ArticleCard articles={articles} />
        {/* <PaginationArrow
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        /> */}
      </div>
    </>
  );
}

Blog.getLayout = function getLayout(blog) {
  return (
    <BlogLayout>
      <InnerLayout>{blog}</InnerLayout>
    </BlogLayout>
  );
};

export const getStaticProps = async () => {
  const categoryData = await client.get({ endpoint: "categories" });

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=20",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
    },
  };
};
