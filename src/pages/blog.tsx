import { client } from "../../libs/client";
import { PER_PAGE } from "./api/pager";
import ArticleCard from "../components/organisms/articleCard/ArticleCard";
// import PaginationArrow from "../components/pagination/Pagination";
import Categories from "../components/molecules/categories/Categories";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";

export default function Blog({ articles, categories, totalCount }) {
  return (
    <>
      <Categories categories={categories} />

      <SectionTitle largeText="Blog" smallText="ブログ記事一覧" />
      <ArticleCard articles={articles} />
      {/* <PaginationArrow
          currentPageNumber={1}
          maxPageNumber={Math.ceil(totalCount / PER_PAGE)}
        /> */}
    </>
  );
}

// Blog.getLayout = function getLayout(blog) {
//   return (
//     <BlogLayout>
//       <InnerLayout>{blog}</InnerLayout>
//     </BlogLayout>
//   );
// };

export const getStaticProps = async () => {
  const categoryData = await client.get({ endpoint: "categories" });

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=20",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      categories: categoryData.contents,
      totalCount: data.totalCount,
      articles: data.contents,
    },
  };
};
