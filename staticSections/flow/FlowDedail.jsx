import styles from "../../styles/staticSections/flow.module.scss";
// import LinkButton from '../components/LinkButton';

export default function FlowDetail() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Flow</h2>
        <div className={styles.subscript}>制作の流れ</div>
      </div>

      <main className={styles.sectionInner}>
        <p>
          Jamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。
        </p>
        <div className={styles.flowContainer}>
          <div className={styles.flowItem}>
            <h3>1 お問い合わせ</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>2 お見積もり</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>3 ご契約</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>4 デザイン作成</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>5 実装作業</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>6 公開（納品）</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
