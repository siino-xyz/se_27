import styles from '../styles/sections/motivation.module.scss'
import Image from 'next/image'


export default function Motivation() {
  return (
    <div className={styles.sectionContainer}>

      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Our Motivation
          <br />
          <div className={styles.subscriptJp}>ウェブサイトを取り巻くトラブル</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div> 
          <div className={styles.twoColumns}>
            <div className={styles.scrollTextWrapper}>
              <div className={styles.scrollText}>
                <p>自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。</p>
              </div>
            </div>

            <div>
              <Image 
                src='/top/top-performance.png'
                width={580}
                height={580}
                layout='intrinsic'
                alt="top-largeTypo"
              />
            </div>
          </div>
          <div className={styles.twoColumns}>
              <div>
                <Image 
                  src='/top/top-security.png'
                  width={580}
                  height={580}
                  layout='intrinsic'
                  alt="top-largeTypo"
                />
              </div>

              <div className={styles.scrollTextWrapper}>
                <div className={styles.scrollText}>
                  <p>自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。自社サイトの読み込みが遅い。特にスマホからの表示が遅い。</p>
                </div>
              </div>


          </div>
        </div>
      </div>
    </div>
  )
}

