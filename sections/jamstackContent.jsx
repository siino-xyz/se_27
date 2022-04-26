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
            <h2 className={styles.sectionTitle}>Jamstackとはなにか？</h2>
          </div>

          <div className={styles.summary}>
            <p>
              jamstackとは、J・A・M（JavaScript・API・Markup）を用いてウェブサイトを構築する、比較的新しいアーキテクチャのひとつです。
              <br />
              ウェブブラウザで実行されるプログラミング言語であるJavaScript
              APIとは、外部プログラムを利用するための仕組みです。
              MarkupはHTMLのことを指します。
              特定の企業が提供する技術やサービスのことを指しているわけではなく、オープンソースな概念です。
              静的なサイトでウェブサイトを構築し、
              ブログ記事などの動的なコンテンツはAPI経由で実装することで、 。
            </p>
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
            <h3>特徴１.ウェブページを事前に生成するため、高速</h3>
            <p>
              Jamstackの大きな特徴は、ウェブページを静的な状態で配信することです。
              「静的」というのは、すべてのページをあらかじめ生成した状態でユーザを待っている状態を指します。
              <br />
              すでにできあがっているページを返すだけなので、高速です。
              ユーザのリクエストに応じて都度ページを生成する場合は「動的」といいます。
            </p>
          </div>
          <div className={styles.innerTopic}>
            <h3>特徴２.CDNを用いたサーバレスホスティング</h3>
            <p>
              SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
              単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
              最も適切な構築方法のご提案からスタートします。
            </p>
          </div>
          <div className={styles.innerTopic}>
            <h3>特徴３.ヘッドレスCMSを用いればコンテンツ管理も可能</h3>
            <p>
              SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
              単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
              最も適切な構築方法のご提案からスタートします。
            </p>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>図で見る、従来との違い</h2>
          </div>
          <p>
            SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
            単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
            最も適切な構築方法のご提案からスタートします。
          </p>
          <div className={styles.diff}>
            <div className={styles.diffContent}>
              <div>
                <h3>現在主流のウェブサイト配信</h3>
                <p>
                  SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
                  単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
                  最も適切な構築方法のご提案からスタートします。
                </p>
              </div>
              <Image
                src="/jamstack/lampstack.svg"
                width={456}
                height={497}
                layout="intrinsic"
                alt="lanpstack"
              />
            </div>
            <div className={styles.diffContent}>
              <div className={styles.gridReverse}>
                <h3>Jamstackのウェブサイト配信</h3>
                <p>
                  SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
                  単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
                  最も適切な構築方法のご提案からスタートします。
                </p>
              </div>
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

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>
              Jamtackのメリット・デメリット
            </h2>
            <p>
              Jamstackは、速いウェブサイトを低コストかつスピーディに構築する方法のひとつとして有力なオプションであることには間違いないありませんが、
              ウェブサイトのパフォーマンス向上における銀の弾丸とも言い切れません。
              以下のようなメリット・デメリットがあります。
            </p>
          </div>

          <div className={styles.melitDemelit}>
            <div className={styles.melitDemelitContent}>
              <h3>Jamstackのメリット</h3>
              <ul>
                <li>ページ読み込みが高速（モバイルファースト）</li>
                <li>CDN経由で配信しているため、サーバの管理から開放される</li>
                <li>特定のサーバを持たないので、セキュア</li>
                <li>規模に応じたスケーラブルな運用が可能</li>
                <li>小規模サイトの場合、0円で運用できる</li>
              </ul>
            </div>
            <div className={styles.melitDemelitContent}>
              <h3>Jamstackのデメリット</h3>
              <ul>
                <li>
                  サイトを更新するたびにビルドが必要となるため、即時的な情報更新が難しい
                </li>
                <li>構築には専門知識が必要なため、開発者が少ない。</li>
                <li>利用しているCDN・APIなどの障害が起きた場合、</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>Jamstackを導入すべきか</h2>
            <p>
              ここで挙げている向き不向きは、あくまでSE-27で制作する場合の目安としてお考えください。
            </p>
          </div>
          <div className={styles.shouldbe}>
            <div className={styles.shouldbeContent}>
              <div>
                <h3>Jamstackが向いているプロジェクト</h3>
                <ul>
                  <li>コーポレートサイト・サービスサイト</li>
                  <li>ランディングページ</li>
                  <li>情報更新に即時性が求められないメディアサイト</li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/jamstack/midori-maru.png"
                  width={362}
                  height={362}
                  layout="intrinsic"
                  alt="/"
                />
              </div>
            </div>
            <div className={styles.shouldbeContent}>
              <div>
                <h3>Jamstackが向いていないプロジェクト</h3>
                <ul>
                  <li>即時に情報を更新したい場合（速報など）</li>
                  <li>ユーザ側で記事の投稿などを行うウェブサービス</li>
                  <li>会員制サイトなど、動的な要件の多いサイト</li>
                </ul>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/jamstack/orangetri.png"
                  width={362}
                  height={362}
                  layout="intrinsic"
                  alt="/"
                />
              </div>
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
