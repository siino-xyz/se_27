import Image from "next/image";

import styles from "../../styles/staticSections/toppage.module.scss";
export default function Firstview() {
  return (
    <>
      <div className={styles.firstViewContainer}>
        <div className={styles.firstviewImage}>
          <Image
            src="/top/fv_logo.svg"
            width={388}
            height={486}
            layout="intrinsic"
            alt="se-27_logo"
          />
        </div>
      </div>
    </>
  );
}
