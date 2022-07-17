import styles from "../../styles/staticSections/flow.module.scss";
// import Cta from "../toppage/Cta";

export default function QandA() {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Q&A</h2>
          <div className={styles.subscript}>よくあるご質問</div>
        </div>

        <main className={styles.sectionInner}>
          <div className={styles.flowContainer}>
            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Wordpressサイトは作ってないの？
                </h3>
              </div>
              <p>
                Jamstackアーキテクチャを用いた、高速&セキュアなWordPressサイトを作ることも可能です。既存のWordPressサイトをリニューアルされたい場合にもこの方法はオススメです。詳しくはご相談ください。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.Jamstackでサイトを作った場合、運用コスト（サーバ代など）はどのくらいかかるの？
                </h3>
              </div>
              <p>
                小規模なサイトであれば、サーバ代は０円で運用可能です。
                その他の費用（ドメイン・利用されている各種ツールなど）は通常通りにかかります。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>Q.SEO対策もお願いできる？</h3>
              </div>
              <p>
                SE-27では、全てのご依頼でGoogleの提唱するコアウェブバイタルや、ウェブ標準規格であるW3Cの勧告をできる限り満たすように実装しております。
                こういった基本的な内部対策とは別に、より検索順位を上げるための施策（Google広告出稿やその他戦略）のご相談も別途お承りしておりますので、ご相談ください。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>Q.製作期間はどのくらい？</h3>
              </div>
              <p>
                たとえば、5ページ前後のコーポレートサイト・小規模なメディアサイトであれば、着手からリリースまで1か月程度が目安となります。
                デザインや機能要件によってはもう少しお時間を頂くこともございます。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.サイト納品後のサポートはある？
                </h3>
              </div>
              <p>
                納品後のトラブル防止や満足度向上のために、すべての成果物に納品から2か月間の品質保証を設けています。（運用サポートやちょっとしたテキストの変更など）
              </p>
              <p>
                なお、デザインや機能の大幅な変更・追加等はこのサポートに含まれませんので、別途ご相談ください。
              </p>
            </div>

            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.制作料金の相場感を教えて欲しい
                </h3>
              </div>
              <p>
                SE-27では、安く済むものは安く、高くなる場合は相応の金額を頂くというスタンスを取っています。そのため、固定の料金表を用意していません。
                <p>以下はご参考までのざっくりとした料金感です。</p>
                <ul>
                  <li>
                    ペライチ（1ページ構成）のLP、サービスサイトなど→15万円前後
                  </li>
                  <li>5ページ前後のコーポレートサイトなど→40～50万円</li>
                  <li>
                    ページ数の多いサイト・オウンドメディアなど→50万円～100万円
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles.flowItem}>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  Q.デザインだけ・コーディングだけ依頼したい
                </h3>
              </div>
              <p>
                デザインのみ、コーディングのみのご依頼も可能です。
                制作会社様などで、デザイナー・コーダーをお探しの場合もご相談ください。実績や料金などをご共有致します。
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* <Cta
        title="Contact us"
        subscript="SE-27に相談してみる？"
        body="その他のご質問があれば、お気軽にお問い合わせください。"
      /> */}
    </>
  );
}
