import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Services</h2>
        <div className={styles.subscript}>SE-27のサービス</div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.h3Title}>
          <h3>ウェブサイト開発</h3>
        </div>
        <div className={styles.grid}>
          <Image
            src="/top/tag.svg"
            width={300}
            height={200}
            layout="intrinsic"
            alt="codeTag_Image"
          />
          <p>
            SE-27では、Jamstackアーキテクチャを用いたウェブサイト（ホームーページ）制作を専門としています。Next.js,Gatsby.jsなどのモダンなReact系フレームワークをベースに、
            運用ニーズに応じた柔軟な設計を行います。
          </p>
        </div>

        <div className={styles.h3Title}>
          <h3>ウェブデザイン</h3>
        </div>
        <div className={styles.grid}>
          <Image
            src="/top/des.svg"
            width={300}
            height={200}
            layout="intrinsic"
            alt="codeTag_Image"
          />
          <p>
            「ホームページを作る目的はなにか？」
            <br />
            「誰に何を伝えたいのか」
            <br />
            といった問いからスタートします。
            <br />
            デザインは目的を達成するための手段であるという考えのもと、期待する結果を得るためのデザイン・導線設計を構築します。
          </p>
        </div>
      </main>
    </section>
  );
}
