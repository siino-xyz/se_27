import styles from "../styles/sections/services.module.scss";
import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className={styles.sectionContainer}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Services
          <br />
          <div className={styles.subscriptJp}>SE-27のサービス</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.ttlWrapper}>
          <h3 className={styles.subTitle}>Jamstackを用いたウェブサイト開発</h3>
        </div>
        <div className={styles.twoColumns}>
          <div>
            <p className={styles.paragraph}>
              SE-27では、Jamstackアーキテクチャを用いたウェブサイト（ホームーページ）制作を専門としています。Next.js,Gatsby.jsなどのモダンなReact系フレームワークをベースに、
              運用ニーズに応じた柔軟な設計を行います。
            </p>
          </div>

          <div className={styles.image}>
            <Image
              className={styles.imageInner}
              src="/top/top-design.svg"
              width={300}
              height={200}
              layout="intrinsic"
              alt="codeTag_Image"
            />
          </div>
        </div>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.ttlWrapper}>
          <h3 className={styles.subTitle}>WEBデザイン</h3>
        </div>
        <div className={styles.twoColumns}>
          <div>
            <p>
              「ホームページを作る目的はなにか？」
              <br />
              「ユーザにもっとも伝えたいことは何か？」
              <br />
              「このホームページを見るのは誰か？」
              <br />
              といった問いからスタートします。
              <br />
              デザインは目的を達成するための手段であるという考えのもと、期待する結果を得るためのデザイン・導線設計を構築します。
            </p>
          </div>

          <div className={styles.image}>
            <Image
              className={styles.imageInner}
              src="/top/top-code.svg"
              width={300}
              height={200}
              layout="intrinsic"
              alt="codeTag_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
