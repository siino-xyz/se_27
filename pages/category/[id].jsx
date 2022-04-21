import { client } from "../../libs/client";
import Pagination from "../../components/Pagination";
import styles from "../../styles/pages/blog.module.scss";
import ArticleCard from "../../components/ArticleCard";
import InnerLayout from "../../layouts/InnerLayout";
import Categories from "../../components/Categories";
import BlogLayout from "../../layouts/BlogLayout";
import BlogHeader from "../../components/blogHeader";
export const CategoryId = ({ articles, totalCount, categories }) => {
  if (articles.length === 0) {
    return (
      <>
        <div className={styles.container}>
          <div>このカテゴリには記事がありません</div>
        </div>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <Categories categories={categories} />
      <ArticleCard articles={articles} />
    </div>
  );
};

export default CategoryId;

CategoryId.getLayout = function getLayout(categoryid) {
  return (
    <BlogLayout>
      <InnerLayout>{categoryid}</InnerLayout>
    </BlogLayout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `categories[equals]${id}` },
  });
  const categoryData = await client.get({ endpoint: "categories" });

  //get pagination props
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const pagination = await fetch(
    "https://kp822wg687.microcms.io/api/v1/categories?offset=0&limit=3",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  // console.log(id);
  return {
    props: {
      articles: data.contents,
      categories: categoryData.contents,
      totalCount: pagination.totalCount,
    },
  };
};
