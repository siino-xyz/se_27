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
              SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
              単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
              最も適切な構築方法のご提案からスタートします。
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
              SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。
              単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に
              最も適切な構築方法のご提案からスタートします。
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
          </div>

          <div className={styles.melitDemelit}>
            <div className={styles.melitDemelitContent}>
              <h3>Jamstackのメリット</h3>
              <ul>
                <li>Jamstackのメリット</li>
                <li>Jamstackのメリット</li>
                <li>Jamstackのメリット</li>
              </ul>
            </div>
            <div className={styles.melitDemelitContent}>
              <h3>Jamstackのデメリット</h3>
              <ul>
                <li>Jamstackのデメリット</li>
                <li>Jamstackのデメリット</li>
                <li>Jamstackのデメリット</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.sectionInner}>
          <div className={styles.ttlWrapper}>
            <h2 className={styles.sectionTitle}>Jamstackを導入すべきか</h2>
          </div>
          <div className={styles.shouldbe}>
            <div className={styles.shouldbeContent}>
              <div>
                <h3>Jamstackが向いているプロジェクト</h3>
                <ul>
                  <li>Jamstackが向いているプロジェクト</li>
                  <li>Jamstackが向いているプロジェクト</li>
                  <li>Jamstackが向いているプロジェクト</li>
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
                  <li>Jamstackが向いていないプロジェクト</li>
                  <li>Jamstackが向いていないプロジェクト</li>
                  <li>Jamstackが向いていないプロジェクト</li>
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
