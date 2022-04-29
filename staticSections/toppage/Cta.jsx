import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";

export default function Cta() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Contact</h2>
        <div className={styles.subscript}>お問い合わせ</div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <p>
            amstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。
          </p>
          <LinkButton url={"/contactform"} button="SE-27に相談する" />
        </div>
      </main>
    </section>
  );
}
