import { client } from "@libs/client";
import { Seo } from "@components";
import { getCategories, getContents } from "@libs";
import { GetStaticPropsContext } from "next";
import {
  // CategoriesLinks,
  ArticleCard,
  LinkButton,
  Breadcrumb,
} from "@components";

export const CategoryId = ({ articles, name }) => {
  if (articles.length === 0) {
    return (
      <>
        <div>
          <main>
            <div>
              <div>このカテゴリにはまだ記事がありません。</div>
              <LinkButton
                url={"/blog"}
                text={"ブログ一覧へもどる"}
                buttonDisplay={"block"}
              />
            </div>
          </main>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <main>
          {/* <Breadcrumb articles={articles} categories={categories} /> */}
          {/* <CategoriesLinks categories={categories} /> */}
          <div>
            <h2>{name}</h2>
          </div>
          <ArticleCard articles={articles} />
        </main>
      </div>
    </>
  );
};

export default CategoryId;

export const getStaticPaths = async () => {
  // const categories = await getCategories();
  // const paths = categories.contents.map(
  //   (category) => `/category/${category.id}`
  // );
  // return { paths, fallback: false };
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const page: any = context.params?.id || "1";
  // const categoryId = context.params?.categoryId;
  const articleFilter = `categories[equals]${page}`;

  const { articles, categories } = await getContents(page, articleFilter);

  // const selectedCategory =
  //   categoryId !== undefined
  //     ? categories.find((content) => content.id === categoryId)
  //     : undefined;

  // const data = await client.get({
  //   endpoint: "articles",
  //   queries: { filters: `categories[equals]${categoryId}` },
  // });

  const categoryData = await getCategories();
  // console.log(selectedCategory);
  return {
    props: {
      // categories: categoryData.contents,
      // articles: data.contents,
      // selectedCategory,
      articles,
      categories,
    },
  };
};
