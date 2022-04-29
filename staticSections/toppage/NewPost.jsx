import styles from "../../styles/staticSections/toppage.module.scss";

const NewPost = () => {
  return (
    <>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Blog</h2>
        <div className={styles.subscript}>新着ブログ</div>
      </div>
    </>
  );
};

export default NewPost;
