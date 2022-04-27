import styles from "../styles/sections/motivation.module.scss";
import Image from "next/image";

export default function Motivation() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          More
          <br />
          <div className={styles.subscriptJp}>
            ウェブサイトを取り巻くトラブル
          </div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div>
          <div className={styles.ttlWrapper}>
            <h3 className={styles.subTitle}>
              パフォーマンスが悪いとどうなるか
            </h3>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.scrollTextWrapper}>
              <div className={styles.scrollText}>
                <h4>ユーザー体験の低下</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>ユーザー直帰率の増大</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>検索エンジンの評価が下がる</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>伝えたいことが伝えられない</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
              </div>
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src="/top/lazyphone.png"
                width={462}
                height={463}
                layout="intrinsic"
                alt="top-largeTypo"
              />
            </div>
          </div>
          <div className={styles.ttlWrapper}>
            <h3 className={styles.subTitle}>セキュリティリスクを招く運用</h3>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.imageWrapper}>
              <Image
                src="/top/cautionpc.png"
                width={524}
                height={452}
                layout="intrinsic"
                alt="top-largeTypo"
              />
            </div>
            <div className={styles.scrollTextWrapper}>
              <div className={styles.scrollText}>
                <h4>サーバーの管理を行っていない</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>プラグインなどのアップデートを行っていない</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>ログインパスワードが「admin」</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
                <h4>自社サイトをメンテナンスする人が居ない</h4>
                <p>
                  自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
