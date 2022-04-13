import styles from '../styles/sections/bigtypo.module.scss'
import Image from 'next/image';

export default function Bigtypo() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.twoColumns}>
        <div>
            <Image 
              src='/top/top-largeTypo.svg'
              width={588}
              height={355}
              layout='intrinsic'
              alt="top-largeTypo"
            />
        </div>

        <div>
          <Image 
            src='/top/top-largeArrow.svg'
            width={352}
            height={147}
            layout='intrinsic'
            alt="/"
          />
        </div>
      </div>

      <div className={styles.singleColumns}>
        <p>刹那は、仏教語で表される時間の最小単位です。その長さは75分の1秒とも言われています。ウェブコンテンツの表示に求められているのは、まさに「刹那」の速さです。ユーザーに伝えたいことを刹那の速さでjamstack次世代のホームーページ制作サービスです。高速安全性の高いの高いホームページを、低コストで</p>
      </div>

    </div>
  )
}

