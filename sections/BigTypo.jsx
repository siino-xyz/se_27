import styles from "../styles/sections/bigtypo.module.scss";
import Image from "next/image";

export default function Bigtypo() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.twoColumns}>
        <div>
          <Image
            src="/top/top-largeTypo.svg"
            width={588}
            height={355}
            layout="intrinsic"
            alt="top-largeTypo"
          />
        </div>

        <div className={styles.arrow}>
          <Image
            src="/top/top-largeArrow.svg"
            width={352}
            height={147}
            layout="intrinsic"
            alt="/"
          />
        </div>
      </div>

      <div className={styles.singleColumns}>
        <p>
          大量の情報がめまぐるしいスピードで消化されていく現代ネット社会では、ユーザーが1つのコンテンツに使える時間は限られており、そんなに待ってくれない。
          <br />
          SE-27は、「ユーザーにいちばん伝えたいことをできる限りシンプルに、そして刹那の速さで届ける」というコンセプトのもと、高速で安全なウェブサイトをデザイン・開発します。
        </p>
      </div>
    </div>
  );
}
