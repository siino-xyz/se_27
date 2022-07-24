import React from "react";
import type { NextPageWithLayout } from "next";
import { WithoutFV } from "@layouts";
import { IArticles, ICategories } from "@types";
import { getContents } from "@libs/blog";
import {
  ArticleCard,
  CategoriesList,
  SectionTitle,
  Breadcrumb,
} from "@components";

type BlogProps = {
  articles: IArticles[];
  categories: ICategories[];
};

const Blog: NextPageWithLayout<BlogProps> = React.memo(function BlogMemo(
  props
) {
  return (
    <>
      {/* <Breadcrumb articles={props.articles} categories={props.categories} /> */}
      <CategoriesList categories={props.categories} />
      <SectionTitle largeText="Blog" smallText="ブログ記事一覧" />
      <ArticleCard articles={props.articles} />
    </>
  );
});

export default Blog;

Blog.getLayout = function getLayout(blog: React.ReactElement) {
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
