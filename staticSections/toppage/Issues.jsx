import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function Isuues() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Issues</h2>
        <div className={styles.subscript}>自己紹介</div>
      </div>

      <main className={styles.sectionInner}>
        <p>
          ウェブサイトの表示高速化やセキュリティ対策は、
          ユーザー体験の質や安全性を担保する上で欠かせませんが、運営者にとってはその必要性が実感しにくい領域でもあります。
          <br />
          これらの問題を放置すると具体的にどのようなリスクがあるのかを簡単にご紹介します。
        </p>
        <div className={styles.h3Title}>
          <h3>表示速度が遅いと何がおきるのか</h3>
        </div>
        <div className={styles.grid}>
          <Image
            src="/top/lazyphone.png"
            width={462}
            height={463}
            layout="intrinsic"
            alt="top-largeTypo"
          />
          <div className={styles.scrollText}>
            <h4>ユーザー直帰率の増加</h4>
            <p>
              Googleの研究によると、ページの読み込み速度が1秒から5秒に増えると、モバイルサイトの訪問者の直帰率は90%増えるというデータがあります。
              <br />
            </p>
            <h4>SEO評価が下がる</h4>
            <p>
              2021年06月より、ウェブサイトのパフォーマンスを数値化したCore Web
              Vitalsの指標がGoogleによって導入されました。
              <br />
              この指標では、ページが表示されるまでの時間、通信環境の安定しないモバイル端末に配慮しているか、アクセシビリティを損なうレイアウトになっていないかなどを分析・数値化し、SEO評価に反映しています。
            </p>
            <h4>伝えたい事が伝えられない</h4>
            <p>
              素晴らしいコピーやクリエイティブを用意していても、表示速度が遅ければユーザーの目に留まる機会をスポイルしてしまうことになります。この問題は、検索エンジンから受けるSEO上の評価よりも深刻です。
            </p>
          </div>
        </div>
        <div className={styles.h3Title}>
          <h3>サイバー攻撃</h3>
        </div>
        <div className={styles.grid}>
          <Image
            src="/top/cautionpc.png"
            width={524}
            height={452}
            layout="intrinsic"
            alt="top-largeTypo"
          />
          <div className={styles.scrollText}>
            <h4>不正アクセス・改ざん</h4>
            <p>
              不正アクセスや改ざんは、サーバやデータベースへ侵入し、サイトのデータ盗んだり、書き換えたりするだけでなく、ウイルスファイル拡散の拠点として利用されてしまうこともあります。
              <br />
              PHPやWordPressのバージョンを最新のものにアップデートしていないことや、予測しやすいログインパスワードなどが主な原因です。
            </p>
            <h4>DDoS攻撃</h4>
            <p>
              DDoS攻撃とは、不特定多数のコンピュータから、攻撃対象のサイトに大量のリクエストを送信し、サーバをダウンさせることでサイトの閲覧を不可能にしてしまうサイバー攻撃の1つです。
              <br />
              多くのホスティングサービスでは、複数のサイトでひとつのサーバを共同利用しているケースが多いため、自社サイトが攻撃対象でなかった場合も影響を受けてしまうリスクがあります。
            </p>
            <h4>スパムメール</h4>
            <p>
              ウェブサイト運営におけるスパムメールとは、自社サイトのお問い合わせフォームを経由して何度も大量に送られてくる悪質なメールのことです。
              <br />
              対策をしない限り頻繁に送られてくるため、重要なメールを見逃してしまったり、ディスク容量がパンクしてしまうリスクがあリます。また、ウイルスが仕込まれたURLが添付されていることもあるため、迅速な対応が必要です。
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
