import styles from "../styles/layouts/blog-layout.module.scss";
import Footer from "../components/Footer";
import { pageFadein } from "../hooks/fadeIn";
import Header from "../components/Header";

export function BlogContainer({ children }) {
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <>
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
