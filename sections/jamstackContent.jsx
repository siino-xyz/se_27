import styles from "../styles/sections/jamstackContent.module.scss";
import LinkButton from "../components/LinkButton";
import Image from "next/image";

const JamstackContent = () => {
  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.eyeCatch}>
          <Image
            src="/jamstack/eyeCatch.svg"
            width={1120}
            height={554}
            layout="intrinsic"
            alt="jamstackざっくり解説"
          />
        </div>
        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>Jamstackとは何か</h2>
          </div>

          <div className={styles.summary}>
            <div>
              <p>
                jamstackとは、JavaScript・API・Markup(HTML/CSS)の3つをベースとしてウェブサイトを構築する、比較的新しいアーキテクチャのひとつです。
              </p>
              <p>
                従来のサイトを作る方法よりも高速で、高セキュリティであるという特徴を持ちます。
              </p>

              <p>
                このページでは、従来のウェブサイトとJamstackの違いや、Jamstackがどういった場面に向いているのかについて解説していきます。まずはJamstackの特徴を簡単にご紹介します。
              </p>
            </div>
            <div className={styles.jamstackLogo}>
              <Image
                src="/jamstack/jamstackLogo.svg"
                width={383}
                height={129}
                layout="intrinsic"
                alt="jamstackLogo"
              />
            </div>
          </div>
          <div className={styles.innerTopic}>
            <h3>特徴１.表示速度が高速</h3>
            <p>
              Jamstackは、
              すべてのページがあらかじめ生成された状態で配信されるという特徴に加え、CDN（コンテンツ・デリバリー・ネットワーク）経由でのホスティングを行うため、コンテンツの表示速度が高速です。
              <br />
              すでにできあがっているページを返すだけなので、高速です。
              ユーザのリクエストに応じて都度ページを生成する場合は「動的」といいます。
            </p>
          </div>
          <div className={styles.innerTopic}>
            <h3>特徴２.セキュリティリスクが低い</h3>
            <p>
              ハッカーの攻撃の的となる、サーバーやデータベースがウェブページから切り離されているため、従来型のウェブサイトよりもセキュリティホールが圧倒的に少ないというメリットがあります。
            </p>
          </div>
          <div className={styles.innerTopic}>
            <h3>特徴３.スケーラブルな運用が可能</h3>
            <p>
              Jamstackで構築されたウェブサイトは複雑なバックエンドを持たないため、規模の変化に強いというメリットがあります。
              <br />
              たとえば、運用フェーズにおいて「アクセスが増えてきたので使用量を増やしたい」「新しい機能を実装したい」と言ったニーズが出てきた場合にも柔軟に拡張していくことができます。
            </p>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>図で見る、従来との違い</h2>
          </div>
          <p>
            現在主流のウェブサイト配信の方法と、Jamstackの配信方法では具体的に何が違うのでしょうか？
            簡単な図で解説しています。
          </p>
          <div className={styles.diff}>
            <h3>現在主流のウェブサイト配信</h3>
            <div className={styles.diffContent}>
              <div>
                <p>
                  サーバは、ユーザーからのリクエストがあるたびに必要なデータをデータベースへ取得しに行き、ブラウザに返却するという流れです。この配信方法には、大きく2つのネックがあります。
                </p>
                <ul>
                  <li>
                    サーバがデータを取得している間、ユーザーは待たされる。
                  </li>
                  <li>
                    サーバやデータベースに脆弱性があった場合、簡単にハッキングされてしまう。
                  </li>
                </ul>

                <p>
                  パフォーマンスチューニングやセキュリティ施策を正しく行っていれば基本的には問題ないものの、維持管理のコストがかかってくることもあり、十分な対策が行えていないウェブサイトも少なくありません。
                </p>
              </div>
              <div className={styles.gridReverse}>
                <Image
                  src="/jamstack/lampstack.svg"
                  width={456}
                  height={497}
                  layout="intrinsic"
                  alt="lanpstack"
                />
              </div>
            </div>
            <h3>Jamstackのウェブサイト配信</h3>
            <div className={styles.diffContent}>
              <div>
                <div>
                  <p>
                    現在主流のウェブサイト配信と大きく異なるのは、事前にすべてのページを構築してしまい、それをCDN経由で配信している点です。
                  </p>
                  <p>
                    ここで登場しているCDN（コンテンツ・デリバリー・ネットワーク）とは、より効率的にコンテンツを配信するためのシステムで、世界中に配置されたキャッシュサーバを利用して、効率的にコンテンツを配信することを実現しています。
                    従来型のレンタルサーバに比べレスポンスが早くなること、負荷を分散できるので大量のアクセスに強いというメリットがあります。
                  </p>
                  <p>
                    また、Jamstackではサーバやデーターベースが切り離された状態で運用されるため、セキュリティホールが少ないという特徴があります。
                  </p>
                  <p>
                    上記のような特徴から、Jamstackは低コストで効率的にウェブサイトを配信する方法として注目が集まっています。
                  </p>
                </div>
              </div>
              <div className={styles.gridReverse}>
                <Image
                  src="/jamstack/serverLessStack.svg"
                  width={455}
                  height={497}
                  layout="intrinsic"
                  alt="lanpstack"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>Jamstackを導入すべきか</h2>
            <p>Jamstackが向いているケースとそうでないケースがあります。</p>
          </div>
          <div className={styles.shouldbe}>
            <div className={styles.shouldbeContent}>
              <div>
                <h3>Jamstackが向いているケース</h3>
                <p>
                  一般的にJamstackは、以下のようなウェブサイトを作るときに好んで利用されます。
                </p>
                <ul>
                  <li>コーポレートサイト</li>
                  <li>メディアサイト・ブログサイト</li>
                  <li>ランディングページ</li>
                </ul>
              </div>
              <div></div>
              {/* <div className={styles.imageWrapper}>
                <Image
                  src="/jamstack/midori-maru.png"
                  width={362}
                  height={362}
                  layout="intrinsic"
                  alt="/"
                />
              </div> */}
            </div>
            <div className={styles.shouldbeContent}>
              <div>
                <h3>Jamstackが向いていないケース</h3>
                <p>
                  CDNのキャッシュサーバに一時的にデータを保存して配信するという構造は効率的である反面、即座な情報更新が難しいというデメリットがあります。そのため、以下のようなケースではJamstackを採用しにくいです。
                </p>
                <ul>
                  <li>即時に情報を更新したいサービス（ニュース速報など）</li>
                  <li>ユーザ側で記事の投稿などを行うウェブサービス</li>
                  <li>会員制サイトなど、動的な要件の多いウェブサイト</li>
                </ul>
              </div>
              {/* <div className={styles.imageWrapper}>
                <Image
                  src="/jamstack/orangetri.png"
                  width={362}
                  height={362}
                  layout="intrinsic"
                  alt="/"
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>
              Jamstackなホームーページを作るなら
            </h2>
          </div>
          <div className={styles.cta}>
            <p>
              SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
              単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
              最も適切な構築方法のご提案からスタートします。
            </p>
            <div>
              <LinkButton url={"/contactform"} button="SE-27に相談してみる" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JamstackContent;
