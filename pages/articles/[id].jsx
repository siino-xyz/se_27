import { client } from "../../libs/client";
import Image from "next/image";
import styles from "../../styles/pages/articles/articles.module.scss";
import dayjs from "dayjs";
import LinkButton from "../../components/LinkButton";
import ShareButtons from "../../components/ShareButtons";
import CustomImage from "../../components/CustomImage";
import NextOgp from "../../components/NextOgp";
import Breadcrumb from "../../components/Breadcrumb";
import Header from "../../components/Header";
import { pageFadein } from "../../hooks/fadeIn";

export default function ArticlesId({ articles, categories }) {
  const { ogImageUrl } = CustomImage(articles.ogp_image.url, articles.title);
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <>
      <NextOgp
        pagetitle={articles.title}
        pagedescription={articles.description}
        pagepath={`articles/${articles.id}`}
        postimg={ogImageUrl}
      />

      <Header />
      <div
        className={styles.innerLayout}
        ref={fadeTargetRef}
        id={domId}
        style={{ opacity: 0 }}
      >
        <div className={styles.innerWrapper}>
          <Breadcrumb articles={articles} categories={categories} />
          <div className={styles.eyeCatch}>
            <Image
              src={articles.eye_catch.url}
              width={944}
              height={531}
              layout="intrinsic"
              alt="eye_catch"
            />
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.sumally}>
              <div className={styles.tag}>{articles.categories.name}</div>
              <h2 className={styles.title}>{articles.title}</h2>
              <div className={styles.date}>
                {dayjs(articles.publishedAt).locale("ja").format("YYYY/MM/DD")}
              </div>
            </div>

            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${articles.body}`,
                }}
              />
            </div>

            <ShareButtons articles={articles} />
            <LinkButton url={"/blog"} button="他の記事も読む" />
          </div>
        </div>
      </div>
    </>
  );
}

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
