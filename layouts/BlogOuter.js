import styles from "../styles/layouts/blog-layout.module.scss";
import Footer from "../components/Footer";
import { pageFadein } from "../hooks/fadeIn";
import Header from "../components/Header";
// import NextOgp from "../components/NextOgp";
import useAsPath from "../hooks/useAsPath";
export function BlogContainer({ children }) {
  const { fadeTargetRef, domId } = pageFadein();
  const { path } = useAsPath();
  return (
    <>
      {/* <NextOgp
        pagetitle={"SE-27ブログ | Jamstack専門のホームページ制作"}
        pagedescription={"Jamstack専門のホームページ制作・SE-27の技術ブログ"}
        pagepath={path}
      /> */}
      <div
        className={styles.container}
        ref={fadeTargetRef}
        id={domId}
        style={{ opacity: 0 }}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default BlogContainer;
