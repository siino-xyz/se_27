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
        <div className={styles.flowContainer}>
          <div className={styles.flowItem}>
            <h3>1 お問い合わせ</h3>
            <p>
              まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、ご用件をお伺い致します。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>2 お見積もり</h3>
            <p>ざっくりとした制作料金や、納期などをご共有致します。</p>
          </div>
          <div className={styles.flowItem}>
            <h3>3 ご契約</h3>
            <p>
              料金・納期を確認のうえ、契約（NDA）を取り交わし正式にご発注頂く形になります。この段階で、着手金として制作料金の50%をお振込みいただきます。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>4 キックオフミーティング</h3>
            <p>
              制作にあたってキックオフミーティングを行います。デザインや機能、その施策要件の洗い出しや、双方に思い違いがないかをすり合わせる目的があります。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>5 デザイン・実装</h3>
            <p>
              まずはデザインの作成から着手し、問題なければ実装に進みます。実装中は、開発用のドメインにて進捗をご確認いただくことができます。
            </p>
          </div>
          <div className={styles.flowItem}>
            <h3>6 公開（納品）</h3>
            <p>
              完成したウェブサイトを本番用のドメインに移行し、デプロイを行います。残金をお振込み頂き、プロジェクトは完了となります。公開後2ヶ月間の品質保証があります。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
