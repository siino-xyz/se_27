import styles from '../styles/sections/services.module.scss'
import Image from 'next/image';


export default function Services() {
  return (
    <div className={styles.sectionContainer}>

      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Services
          <br />
          <div className={styles.subscriptJp}>サービス</div>
        </h2>
      </div>

      <div className={styles.ttlWrapper}>
        <h3 className={styles.subTitle}>
          Jamstackを用いたウェブサイト開発
        </h3>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div className={styles.sectionItem}>
            <p className={styles.paragraph}>SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。</p>
          </div>

          <div className={styles.sectionItem}>
            <Image 
              src='/top/top-code.png'
              width={300}
              height={300}
              layout='intrinsic'
              alt="codeTag_Image"
            />
          </div>
        </div>
      </div>

      <div className={styles.ttlWrapper}>
        <h3 className={styles.subTitle}>
          Jamstackを用いたウェブサイト開発
        </h3>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div>
            <p>SE-27ではJamstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。</p>
          </div>

          <div>
            <Image 
              src='/top/top-design.png'
              width={300}
              height={300}
              layout='intrinsic'
              alt="codeTag_Image"
            />
          </div>
        </div>
      </div>


    </div>
  )
}