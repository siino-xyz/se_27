import React from "react";
import type { NextPageWithLayout } from "next";
import { IArticles, ICategories } from "@types";
import { getContents } from "@libs/blog";
import { WithoutFV } from "@layouts";
import { ArticleCard, CategoriesLinks, SectionTitle } from "@components";

type BlogProps = {
  articles: IArticles[];
  categories: ICategories[];
};

const Blog: NextPageWithLayout<BlogProps> = React.memo(function BlogMemo(
  props
) {
  return (
    <>
      <CategoriesLinks categories={props.categories} />
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
