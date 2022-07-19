import Image from "next/image";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";
import { sprinkles } from "src/css-utils/sprinkles.css";
import {
  IssuesSectionTitle,
  ScrollTextInnerTitle,
  ScrollBox,
} from "./Issues.css";

export default function Isuues() {
  return (
    <>
      <section>
        <SectionTitle
          largeText="Issues"
          smallText="ウェブサイトを取り巻く問題"
        />
        <article>
          <h3 className={IssuesSectionTitle}>Performance</h3>
          <div
            className={sprinkles({
              display: "grid",
              marginX: "size-12",
              gridTemplateColumns: {
                mobile: "grid-cols-1",
                tablet: "grid-cols-1",
                desktop: "grid-cols-2",
              },
              gap: { mobile: "size-12", tablet: "size-12", desktop: "size-24" },
            })}
          >
            <Image
              src="/top/lazyphone.png"
              width={462}
              height={463}
              layout="responsive"
              alt="top-largeTypo"
            />
            <div className={ScrollBox}>
              <h4 className={ScrollTextInnerTitle}>ユーザー直帰率の増加</h4>
              <p>
                Googleの研究によれば、ページの読み込み速度が1秒から5秒に増えるとモバイルサイト訪問者の直帰率は90%増えるというデータがあります。
              </p>
              <h4 className={ScrollTextInnerTitle}>SEO評価が下がる</h4>
              <p>
                2021年06月より、ウェブサイトのパフォーマンスを数値化したCore Web
                Vitalsの指標がGoogleによって導入されました。
              </p>
              <p>
                この指標では、ページが表示されるまでの時間、通信環境の安定しないモバイル端末に配慮しているか、アクセシビリティを損なうレイアウトになっていないかなどを分析・数値化し、SEO評価に反映しています。
              </p>
              <h4 className={ScrollTextInnerTitle}>伝えたい事が伝えられない</h4>
              <p>
                素晴らしいコピーやクリエイティブを用意していても、表示速度が遅ければユーザーの目に留まる機会をスポイルしてしまうことになります。この問題は、検索エンジンから受けるSEO上の評価よりも深刻です。
              </p>
            </div>
          </div>
        </article>
        <article>
          <h3 className={IssuesSectionTitle}>Security</h3>
          <div
            className={sprinkles({
              display: "grid",
              marginX: "size-12",
              gridTemplateColumns: {
                mobile: "grid-cols-1",
                tablet: "grid-cols-1",
                desktop: "grid-cols-2",
              },
              gap: { mobile: "size-12", tablet: "size-12", desktop: "size-24" },
            })}
          >
            <Image
              src="/top/cautionpc.png"
              width={524}
              height={452}
              layout="responsive"
              alt="top-largeTypo"
            />
            <div className={ScrollBox}>
              <h4 className={ScrollTextInnerTitle}>不正アクセス・改ざん</h4>
              <p>
                不正アクセスや改ざんは、ウェブサイトのサーバやデータベースへ侵入し、データ盗んだり、書き換えたりするサイバー攻撃のことです。また、ウイルスファイル拡散の拠点として利用されてしまうこともあります。
                <br />
                PHPやWordPressのバージョンを最新のものにアップデートしていないことや、予測しやすいログインパスワードなどが主な原因です。
              </p>
              <h4 className={ScrollTextInnerTitle}>DDoS攻撃</h4>
              <p>
                DDoS攻撃とは、不特定多数のコンピュータから、攻撃対象のサイトに大量のリクエストを送信し、サーバをダウンさせることでサイトの閲覧を不可能にしてしまうサイバー攻撃の1つです。
                <br />
                多くのレンタルサーバー会社では、複数のサイトでひとつのサーバを共同利用しているケースが多いため、自社サイトが攻撃対象でなかった場合も影響を受けてしまうリスクがあります。
              </p>
              <h4 className={ScrollTextInnerTitle}>スパムメール</h4>
              <p>
                ウェブサイト運営におけるスパムメールとは、自社サイトのお問い合わせフォームを経由して何度も大量に送られてくる悪質なメールのことです。「迷惑なだけで実害はない」と考えて放置するのは危険です。
              </p>
              <p>
                対策をしない限り延々と送られてくるため、重要なメールを見逃してしまったり、ディスク容量がパンクしてしまうリスクがあリます。また、ウイルスが仕込まれたURLが添付されていることもあるため、迅速な対応が必要です。
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
