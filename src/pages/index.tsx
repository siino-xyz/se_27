import React from "react";
import type { NextPageWithLayout } from "next";
import { IArticles } from "@types";
import { getNewestArticles } from "@libs/blog";
import { IncludingFV } from "@layouts";
import {
  ArticleCard,
  LinkButton,
  SectionTitle,
  StaticComponents,
} from "@components";
type TopPageProps = {
  articles: IArticles[];
};

const TopPage: NextPageWithLayout<TopPageProps> = React.memo(
  function TopPageMemo(props) {
    return (
      <>
        <StaticComponents />
        <SectionTitle largeText="Blog" smallText="ブログ" />
        <ArticleCard articles={props.articles} />
        <LinkButton url={"/blog"} text="記事一覧" buttonDisplay="block" />
      </>
    );
  }
);

export default TopPage;

TopPage.getLayout = function getLayout(top: React.ReactElement) {
  return <IncludingFV>{top}</IncludingFV>;
};

export const getStaticProps = async () => {
  const { articles } = await getNewestArticles();
  return {
    props: {
      articles,
    },
  };
};
