import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";

export default function Cta(props) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>{props.title}</h2>
        <div className={styles.subscript}>{props.subscript}</div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <p>{props.body}</p>
          <LinkButton url={"/contactform"} button="SE-27に相談する" />
        </div>
      </main>
    </section>
  );
}
