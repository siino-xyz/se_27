import type { NextPageWithLayout } from "next";
import { IArticles, ICategories } from "@types";
import type { ReactElement } from "react";
import { getContents } from "@libs/blog";
import ArticleCard from "../components/organisms/articleCard/ArticleCard";
import CategoriesLinks from "../components/molecules/categoriesLinks/CategoriesLinks";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";
import WithoutFV from "@layouts/WithoutFV";

type BlogProps = {
  articles: IArticles[];
  categories: ICategories[];
};

const Blog: NextPageWithLayout<BlogProps> = (props) => {
  return (
    <>
      <CategoriesLinks categories={props.categories} />
      <SectionTitle largeText="Blog" smallText="ブログ記事一覧" />
      <ArticleCard articles={props.articles} />
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
