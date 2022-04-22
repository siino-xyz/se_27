import { client } from "../../libs/client";
import styles from "../../styles/pages/blog.module.scss";
import ArticleCard from "../../components/ArticleCard";
import InnerLayout from "../../layouts/InnerLayout";
import Categories from "../../components/Categories";
import BlogLayout from "../../layouts/BlogLayout";
import LinkButton from "../../components/LinkButton";
export const CategoryId = ({ articles, categories }) => {
  if (articles.length === 0) {
    return (
      <>
        <div className={styles.noArticles}>
          <div>このカテゴリにはまだ記事がありません。ゴメンネ。</div>
          <LinkButton url={"/blog"} button="ブログ一覧へもどる" />
        </div>
      </>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>a{}</h2>
      </div>
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

  return {
    props: {
      categories: categoryData.contents,
      articles: data.contents,
    },
  };
};
