import styles from '../../styles/sections/details/flow-detail.module.scss';
// import LinkButton from '../components/LinkButton';

export default function FlowDetail() {
  return (
    <div className={styles.sectionContainer}>
      
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Flow
          <br />
          <div className={styles.subscriptJp}>制作の流れ</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
       <p>Jamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。</p>
        <div className={styles.gridWrapper}>
            <div>
              <div>1.お問い合わせ</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
            <div>
              <div>2.お見積もり</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
            <div>
              <div>3.ご契約</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
            <div>
              <div>4.デザイン作成</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
            <div>
              <div>5.実装作業</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
            <div>
              <div>6.公開（納品）</div>
              <p>まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。</p>
            </div>
        </div>

      </div>
      
    </div>
  )
}