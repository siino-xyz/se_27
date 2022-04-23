import styles from "../styles/layouts/blog-layout.module.scss";
import Footer from "../components/Footer";
import BlogHeader from "../components/blogHeader";
import { pageFadein } from "../hooks/fadeIn";

export function BlogContainer({ children, categories }) {
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <>
      <div
        className={styles.container}
        ref={fadeTargetRef}
        id={domId}
        style={{ opacity: 0 }}
      >
        <BlogHeader categories={categories} />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default BlogContainer;
