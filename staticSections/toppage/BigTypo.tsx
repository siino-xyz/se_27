import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function Bigtypo() {
  return (
    <section className={styles.sectionContainer}>
      <main className={styles.sectionInner}>
        <div className={styles.bigTypo}>
          <Image
            src="/top/top-largeTypo.svg"
            width={588}
            height={355}
            layout="intrinsic"
            alt="top-largeTypo"
          />

          <div>
            <p></p>
            <p>
              SE-27（せつな）は、
              <span>
                「ユーザーにいちばん伝えたいことだけをシンプルに、そして刹那の速さで届ける」
              </span>
              というコンセプトのもと、高速で安全なウェブサイトをデザイン・開発します。
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
