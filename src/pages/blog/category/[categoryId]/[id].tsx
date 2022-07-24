import * as React from "react";
import type { NextPageWithLayout } from "next";
import { GetStaticPropsContext } from "next";
import { getArticles, getCategories, getContents } from "@libs";
import { ArticleCard, Breadcrumb } from "@components";
import { IArticles, ICategories } from "@types";
import { WithoutFV } from "@layouts";

type BlogProps = {
  articles: IArticles[];
  categories: ICategories[];
  article: IArticles;
  category: ICategories;
};

const CategoryPage: NextPageWithLayout<BlogProps> = (props) => {
  // if (props.articles.length === 0) {
  //   return (
  //     <div>
  //       <main>
  //         <div>
  //           <div>このカテゴリにはまだ記事がありません。</div>
  //           {/* <LinkButton
  //               url={"/blog"}
  //               text={"ブログ一覧へもどる"}
  //               buttonDisplay={"block"}
  //             /> */}
  //         </div>
  //       </main>
  //     </div>
  //   );
  // }
  return (
    <div>
      <main>
        {/* {props.articles.map((item) => (
          <h3>{item.categories.name}</h3>
        ))} */}
        {/* <Breadcrumb category={props.category} article={props.article} /> */}
        <ArticleCard articles={props.articles} />
      </main>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <WithoutFV>{page}</WithoutFV>;
};

export const getStaticPaths = async () => {
  const data = await getCategories();
  const paths = data.contents.map(
    (content) => `/blog/category/${content.name}/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const page: any = context.params?.id || "1";

  const articleFilter = `categories[equals]${page}`;
  const { articles, categories } = await getContents(page, articleFilter);
  // const selectedCategory =
  //   categoryId !== undefined
  //     ? categories.find((content) => content.id === categoryId)
  //     : undefined;
  const category = await getCategories();
  const article = await getArticles();

  return {
    props: {
      articles,
      categories,
      category,
      article,
    },
  };
};
