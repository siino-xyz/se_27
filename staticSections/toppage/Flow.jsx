import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";

export default function Flow() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Flow</h2>
        <div className={styles.subscript}>制作の流れとQ&A</div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <p>制作の流れとよくあるご質問をここにまとめています。</p>
          <div>
            <LinkButton url={"/flow"} button="制作の流れを見る" />
          </div>
        </div>
      </main>
    </section>
  );
}
