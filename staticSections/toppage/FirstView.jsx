import Image from "next/image";

import styles from "../../styles/staticSections/firstview.module.scss";
export default function Firstview() {
  return (
    <>
      <div className={styles.firstViewContainer}>
        {/* <div className={styles.firstviewImage}>
          <Image
            src="/top/fv_logo.svg"
            width={388}
            height={486}
            layout="intrinsic"
            alt="se-27_logo"
          />
        </div> */}
        <div className={styles.fvContent}>
          <div className={styles.fvItem}>
            <Image
              src="/top/top-largeTypo.svg"
              width={588}
              height={355}
              layout="intrinsic"
              alt="大切なことは刹那の速さで伝えたい"
            />
            <p>
              SE-27（せつな）は、「ユーザーにいちばん伝えたいことだけをシンプルに、そして刹那の速さで届ける」というコンセプトのもと、高速で安全なウェブサイトをデザイン・開発します。
            </p>
          </div>
          <div className={styles.fvItem}>
            <Image
              className={styles.fvArrow}
              src="/top/fv-arrow.svg"
              width={200}
              height={350}
              layout="intrinsic"
              alt="/"
            />
          </div>
        </div>
      </div>
    </>
  );
}
