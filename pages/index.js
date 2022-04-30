import styles from "../styles/pages/index.module.scss";
//components
import ArticleCard from "../components/ArticleCard";
import LinkButton from "../components/LinkButton";
//layouts
import ToppageLayout from "../layouts/ToppageOuter";
import InnerLayout from "../layouts/GlobalInner";
//staticSections
import Bigtypo from "../staticSections/toppage/BigTypo";
import Services from "../staticSections/toppage/Services";
import Isuues from "../staticSections/toppage/Issues";
import Solution from "../staticSections/toppage/Solution";
import Flow from "../staticSections/toppage/Flow";
import AboutMe from "../staticSections/toppage/AboutMe";
import Cta from "../staticSections/toppage/Cta";
import NewPost from "../staticSections/toppage/NewPost";

export default function Top({ articles }) {
  return (
    <>
      <div className={styles.container}>
        <main>
          <Bigtypo />
          <Services />
          <Isuues />
          <Solution />
          <Flow />
          <Cta title="Contact" subscript="お問い合わせ" body="sdfsdf" />
          <AboutMe />
          <main className={styles.sectionContainer}>
            <NewPost />
            <ArticleCard articles={articles} />
            <div className={styles.btnWrapper}>
              <LinkButton url={"/blog"} button="記事一覧" />
            </div>
          </main>
        </main>
      </div>
    </>
  );
}

Top.getLayout = function getLayout(top) {
  return (
    <ToppageLayout>
      <InnerLayout>{top}</InnerLayout>
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
