import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function Isuues() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Issues</h2>
        <div className={styles.subscript}>ウェブサイトを取り巻く問題</div>
      </div>

      <main className={styles.sectionInner}>
        <p>
          ウェブサイトを運営している以上、パフォーマンスとセキュリティの問題から逃れることはできません。
        </p>
        <p>
          これらの問題を放置していると、本来の目的を達成することが困難になるだけでなく、以下のようなトラブルにつながってしまう可能性もあります。
        </p>
        <div className={styles.issuesH3}>
          <h3>Performance</h3>
        </div>
        <div className={styles.issuesGrid}>
          <div className={styles.gridReverce}>
            <Image
              src="/top/lazyphone.png"
              width={462}
              height={463}
              layout="intrinsic"
              alt="top-largeTypo"
            />
          </div>
          <div className={styles.scrollText}>
            <div className={styles.scrollTextH4}>
              <h4>ユーザー直帰率の増加</h4>
            </div>
            <p>
              Googleの研究によれば、ページの読み込み速度が1秒から5秒に増えるとモバイルサイト訪問者の直帰率は90%増えるというデータがあります。
            </p>
            <div className={styles.scrollTextH4}>
              <h4>SEO評価が下がる</h4>
            </div>
            <p>
              2021年06月より、ウェブサイトのパフォーマンスを数値化したCore Web
              Vitalsの指標がGoogleによって導入されました。
            </p>
            <p>
              この指標では、ページが表示されるまでの時間、通信環境の安定しないモバイル端末に配慮しているか、アクセシビリティを損なうレイアウトになっていないかなどを分析・数値化し、SEO評価に反映しています。
            </p>
            <div className={styles.scrollTextH4}>
              <h4>伝えたい事が伝えられない</h4>
            </div>
            <p>
              素晴らしいコピーやクリエイティブを用意していても、表示速度が遅ければユーザーの目に留まる機会をスポイルしてしまうことになります。この問題は、検索エンジンから受けるSEO上の評価よりも深刻です。
            </p>
          </div>
        </div>
        <div className={styles.issuesH3}>
          <h3>Security</h3>
        </div>
        <div className={styles.issuesGrid}>
          <div>
            <Image
              src="/top/cautionpc.png"
              width={524}
              height={452}
              layout="intrinsic"
              alt="top-largeTypo"
            />
          </div>
          <div className={styles.scrollText}>
            <div className={styles.scrollTextH4}>
              <h4>不正アクセス・改ざん</h4>
            </div>
            <p>
              不正アクセスや改ざんは、ウェブサイトのサーバやデータベースへ侵入し、データ盗んだり、書き換えたりするサイバー攻撃のことです。また、ウイルスファイル拡散の拠点として利用されてしまうこともあります。
              <br />
              PHPやWordPressのバージョンを最新のものにアップデートしていないことや、予測しやすいログインパスワードなどが主な原因です。
            </p>
            <div className={styles.scrollTextH4}>
              <h4>DDoS攻撃</h4>
            </div>
            <p>
              DDoS攻撃とは、不特定多数のコンピュータから、攻撃対象のサイトに大量のリクエストを送信し、サーバをダウンさせることでサイトの閲覧を不可能にしてしまうサイバー攻撃の1つです。
              <br />
              多くのレンタルサーバー会社では、複数のサイトでひとつのサーバを共同利用しているケースが多いため、自社サイトが攻撃対象でなかった場合も影響を受けてしまうリスクがあります。
            </p>
            <div className={styles.scrollTextH4}>
              <h4>スパムメール</h4>
            </div>
            <p>
              ウェブサイト運営におけるスパムメールとは、自社サイトのお問い合わせフォームを経由して何度も大量に送られてくる悪質なメールのことです。「迷惑なだけで実害はない」と考えて放置するのは危険です。
            </p>
            <p>
              対策をしない限り延々と送られてくるため、重要なメールを見逃してしまったり、ディスク容量がパンクしてしまうリスクがあリます。また、ウイルスが仕込まれたURLが添付されていることもあるため、迅速な対応が必要です。
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
