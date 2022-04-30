import styles from "../../styles/staticSections/flow.module.scss";
import LinkButton from "../../components/LinkButton";
import Cta from "../toppage/Cta";

export default function QandA() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Q&A</h2>
          <div className={styles.subscript}>よくあるご質問</div>
        </div>

        <main className={styles.sectionInner}>
          <p>
            Jamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。
          </p>
          <div className={styles.flowContainer}>
            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトはつくってないの？
                </h3>
              </div>
              <p>
                まずはお気軽にご相談ください。SE-27でお引き受け可能かどうかも含め、お話をお伺い致します。
              </p>
            </div>
          </div>
        </main>
      </div>

      <Cta
        title="More details"
        subscript="さらに詳しく知るなら"
        body="より詳しい制作の流れを知りたい、気になることがあれば、お気軽にお問い合わせください。"
      />
    </>
  );
}
