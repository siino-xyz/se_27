import { client } from "../../../../libs/client";
import { PER_PAGE } from "../../api/pager";

import styles from "../../../styles/pages/blog.module.scss";

import BlogLayout from "../../../layouts/BlogOuter";
import InnerLayout from "../../../layouts/GlobalInner";

import PaginationArrow from "../../../components/Pagination";
import ArticleCard from "../../../components/articleCard/ArticleCard";
import Categories from "../../../components/Categories";

export const ArticlePageId = ({
  totalCount,
  currentPageNumber,
  articles,
  categories,
}) => {
  return (
    <>
      <div className={styles.container}>
        <Categories categories={categories} />
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Blog</h2>
          <div className={styles.subscript}>ブログ記事一覧</div>
        </div>

        <ArticleCard articles={articles} />
        <PaginationArrow
          currentPageNumber={currentPageNumber}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        />
      </div>
    </>
  );
};

export default ArticlePageId;

ArticlePageId.getLayout = function getLayout(articlepageid) {
  return (
    <BlogLayout>
      <InnerLayout>{articlepageid}</InnerLayout>
    </BlogLayout>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };

  const res = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles",
    key
  );

  const repos = await res.json();

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/articles/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const categoryData = await client.get({ endpoint: "categories" });
  const id = context.params.id;
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const numId = Number(id);

  const data = await fetch(
    `https://kp822wg687.microcms.io/api/v1/articles?offset=${
      (numId - 1) * PER_PAGE
    }&limit=20`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
      currentPageNumber: numId,
    },
  };
};
