import styles from "../styles/layouts/thankspage.module.scss";

export default function Thankspage({ children }) {
  return (
    <>
      <div className={styles.thankspage}>{children}</div>
    </>
  );
}
