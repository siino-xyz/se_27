import styles from "../styles/pages/index.module.scss";
import ArticleCard from "../components/ArticleCard";
import Services from "../sections/Services";
import ToppageLayout from "../layouts/ToppageLayout";
import InnerLayout from "../layouts/InnerLayout";
import Bigtypo from "../sections/BigTypo";
import Motivation from "../sections/Motivation";
import Solution from "../sections/Solution";
import Flow from "../sections/Flow";
import Contact from "../sections/Contact";
import AboutMe from "../sections/AboutMe";
import LinkButton from "../components/LinkButton";

export default function Home({ articles }) {
  return (
    <>
      <div className={styles.container}>
        <main>
          <Bigtypo />
          <Services />
          <Motivation />
          <Solution />
          <Flow />
          <Contact />
          <AboutMe />

          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>
              Blog
              <br />
              <div className={styles.subscriptJp}>お知らせと技術ブログ</div>
            </h2>
          </div>
          <ArticleCard articles={articles} />
          <div className={styles.btnWrapper}>
            <LinkButton url={"/blog"} button="記事一覧" />
          </div>
        </main>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(home) {
  return (
    <ToppageLayout>
      <InnerLayout>{home}</InnerLayout>
    </ToppageLayout>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3",
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};
