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
  selectedCategory: ICategories;
};

const CategoryPage: NextPageWithLayout<BlogProps> = (props) => {
  // console.log(props.selectedCategory);
  return (
    <div>
      <main>
        <Breadcrumb category={props.selectedCategory} />
        {/* <p>{props.selectedCategory}</p> */}
        <ArticleCard articles={props.articles} />
      </main>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <WithoutFV>{page}</WithoutFV>;
};

/*
  `/blog/category/${content.name}/${content.id}`
  一番最後の${contente.id}の部分はページネーションの番号が入る場所。
  今はまだページネーション実装しないので、一つディレクトリを消しておく。
*/

export const getStaticPaths = async () => {
  const data = await getCategories();
  const paths = data.contents.map((content) => `/blog/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const page: any = context.params?.id || "1";
  const categoryId = context.params?.id;

  const articleFilter =
    categoryId !== undefined ? `categories[equals]${categoryId}` : undefined;
  const { articles, categories } = await getContents(page, articleFilter);

  const selectedCategory =
    categoryId !== undefined
      ? categories.find((content) => content.id === categoryId)
      : undefined;

  return {
    props: {
      articles,
      categories,
      selectedCategory,
    },
  };
};

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
