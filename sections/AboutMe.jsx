import styles from "../styles/sections/aboutme.module.scss";
import Image from "next/image";

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
                src="/top/top-mypic.png"
                width={190}
                height={175}
                layout="intrinsic"
                alt="siino_picture"
              />
            </div>

            <div className={styles.noWrapFlex}>
              <h4>siino</h4>
              <div>
                鳥取県出身の1995/04/27生まれ。大坂在住のフリーランスエンジニア/デザイナー。昔はテレビ局の報道部門で働いていたりした。
              </div>
            </div>
          </div>

          <div className={styles.socialLinkWrapper}>
            <a
              href="https://twitter.com/SE_27_Jamstack"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.socialLinkItem}>
                <p>Twitter</p>
                <Image
                  src="/top/twitterIcon.svg"
                  width={40}
                  height={40}
                  layout="intrinsic"
                  alt="twitterIcon"
                />
              </div>
            </a>
            <a
              href="https://github.com/siino-xyz"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.socialLinkItem}>
                <p>github</p>
                <Image
                  src="/top/githubIcon.svg"
                  width={40}
                  height={40}
                  layout="intrinsic"
                  alt="githubIcon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
