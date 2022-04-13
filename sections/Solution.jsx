import Image from 'next/image';
import styles from '../styles/sections/solution.module.scss';

import LinkButton from '../components/LinkButton';
export default function Solution() {
  return (
    <div className={styles.sectionContainer}>
      
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Solution
          <br />
          <div className={styles.subscriptJp}>高速でセキュアなウェブサイトを低コストで</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div>
            <Image 
                src='/top/top-solution.png'
                width={598}
                height={243}
                layout='intrinsic'
                alt="solution_image"
            />
          </div>

          <div className={styles.noWrapFlex}>
            <p>amstackアーキテクチャを用いた、高速かつ安全性の高いウェブサイト開発を専門としています。単に速いサイトを作るだけではありません。運用スタイルや規模感に合わせて柔軟に最も適切な構築方法のご提案からスタートします。</p>
            <LinkButton 
              button={'Jamstackについて知る'}
            />
          </div>     
        </div>
      </div>

    </div>
  )
}