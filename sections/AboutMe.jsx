import styles from '../styles/sections/aboutme.module.scss'
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className={styles.sectionContainer}>
      
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Aboutme
          <br />
          <div className={styles.subscriptJp}>自己紹介</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div className={styles.innerTwoColumns}>
            <div>
              <Image 
                src='/top/top-mypic.png'
                width={190}
                height={175}
                layout='intrinsic'
                alt="siino_picture"
              />
            </div>

            <div className={styles.noWrapFlex}>
              <h4>siino</h4>
              <div>鳥取県出身の1995/04/27生まれ。大坂在住のフリーランスエンジニア/デザイナー。昔はテレビ局の報道部門で働いていたりした。</div>
            </div>
          </div>

          <div className={styles.socialLink}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}