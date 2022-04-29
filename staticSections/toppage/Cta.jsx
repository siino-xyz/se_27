import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";

export default function Cta() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Contact
          <br />
          <div className={styles.subscriptJp}>お問合せ</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div>
            <p>
              amstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。
            </p>
          </div>
          <div className={styles.r}>
            <LinkButton url={"/contactform"} button="SE-27に相談する" />
          </div>
        </div>
      </div>
    </div>
  );
}
