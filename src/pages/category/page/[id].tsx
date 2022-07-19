import { client } from "../../../../libs/client";
import InnerLayout from "../../../layouts/GlobalInner";
import BlogLayout from "../../../layouts/BlogOuter";

import Categories from "../../../components/categories/Categories";
import ArticleCard from "../../../components/articleCard/ArticleCard";
import LinkButton from "../../../components/linkButton/LinkButton";
import Breadcrumb from "../../../components/breadCrumb/Breadcrumb";
export const CategoryId = ({ articles, categories, name }) => {
  if (articles.length === 0) {
    return (
      <>
        <div>
          <main>
            <div>
              <div>このカテゴリにはまだ記事がありません。ゴメンネ。</div>
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
          <Breadcrumb articles={articles} categories={categories} />
          <Categories categories={categories} />
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
