import { client } from "../../../libs/client";
import styles from "../../../styles/pages/blog.module.scss";
import InnerLayout from "../../../layouts/GlobalInner";
import BlogLayout from "../../../layouts/BlogOuter";

import Categories from "../../../components/Categories";
import ArticleCard from "../../../components/ArticleCard";
import LinkButton from "../../../components/LinkButton";
import Breadcrumb from "../../../components/Breadcrumb";
export const CategoryId = ({ articles, categories, name }) => {
  if (articles.length === 0) {
    return (
      <>
        <div className={styles.sectionContainer}>
          <main className={styles.sectionInner}>
            <div className={styles.noArticles}>
              <div>このカテゴリにはまだ記事がありません。ゴメンネ。</div>
              <LinkButton url={"/blog"} button="ブログ一覧へもどる" />
            </div>
          </main>
        </div>
      </>
    );
  }
  return (
    <>
      <div className={styles.sectionContainer}>
        <main className={styles.sectionInner}>
          <Breadcrumb articles={articles} categories={categories} />
          <Categories categories={categories} />
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>{name}</h2>
          </div>
          <ArticleCard articles={articles} />
        </main>
      </div>
    </>
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

  const paths = data.contents.map((content) => `/category/page/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "articles",
    queries: { filters: `categories[equals]${id}` },
  });

  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      categories: categoryData.contents,
      articles: data.contents,
    },
  };
};
