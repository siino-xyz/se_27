import type { NextPageWithLayout } from "next";
import { IArticles, ICategories } from "@types";
import type { ReactElement } from "react";
import { getContents } from "@libs/blog";
import ArticleCard from "../components/organisms/articleCard/ArticleCard";
import Categories from "../components/molecules/categoryTags/CategoryTags";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";
import WithoutFV from "@layouts/WithoutFV";

type BlogProps = {
  articles: IArticles[];
  categories: ICategories[];
};

const Blog: NextPageWithLayout<BlogProps> = (props) => {
  return (
    <>
      <Categories categories={props.categories} />
      <SectionTitle largeText="Blog" smallText="ブログ記事一覧" />
      <ArticleCard articles={props.articles} />
      {/* <PaginationArrow
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        /> */}
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(blog: ReactElement) {
  return <WithoutFV>{blog}</WithoutFV>;
};

export const getStaticProps = async () => {
  const { articles, categories } = await getContents();
  return {
    props: {
      articles,
      categories,
    },
  };
};

// export const getStaticProps = async () => {
//   //カテゴリを取得
//   const categoryData = await client.get({ endpoint: "categories" });

//   // APIKeyを定義
//   const key = {
//     headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
//   };

//   //全記事を取得（20件まで）
//   const data = await fetch(
//     "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=20",
//     key
//   )
//     .then((res) => res.json())
//     .catch(() => null);

//   return {
//     props: {
//       categories: categoryData.contents,
//       totalCount: data.totalCount,
//       articles: data.contents,
//     },
//   };
// };
