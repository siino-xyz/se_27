import { client } from "../../libs/client";
import Image from "next/image";
import styles from "../../styles/pages/articles/articles.module.scss";
import InnerLayout from "../../layouts/InnerLayout";
import BlogLayout from "../../layouts/BlogLayout";
import dayjs from "dayjs";
import ShareButtons from "../../components/ShareButtons";

export default function ArticlesId({ articles, categories }) {
  return (
    <>
      <div className={styles.innerWrapper}>
        <div className={styles.eyeCatch}>
          <Image
            src={articles.eye_catch.url}
            width={944}
            height={531}
            layout="intrinsic"
            alt="eye_catch"
          />
        </div>

        <div className={styles.sumallyWrapper}>
          <div className={styles.categoryTag}>{articles.categories.name}</div>

          <h2 className={styles.title}>{articles.title}</h2>

          <div className={styles.date}>
            {dayjs(articles.publishedAt).locale("ja").format("YYYY/MM/DD")}
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${articles.body}`,
              }}
            />
          </div>

          <ShareButtons articles={articles} />
        </div>
      </div>
    </>
  );
}

ArticlesId.getLayout = function getLayout(articlesid) {
  return (
    <BlogLayout>
      <InnerLayout>{articlesid}</InnerLayout>
    </BlogLayout>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      articles: data,
      categories: categoryData.contents,
    },
  };
};
