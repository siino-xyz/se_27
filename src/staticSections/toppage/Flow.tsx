import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/linkButton/LinkButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

export default function Flow() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle largeText="Flow" smallText="SE-制作の流れとQ&A" />

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <p>
            安心してご依頼頂けるよう、制作の流れとよくあるご質問について紹介しています。
          </p>
          <div>
            <LinkButton url={"/flow"} text="制作の流れを見る" />
          </div>
        </div>
      </main>
    </section>
  );
}
