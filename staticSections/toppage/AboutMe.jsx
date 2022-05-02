import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>About me</h2>
        <div className={styles.subscript}>自己紹介</div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <div className={styles.flexCol}>
            <Image
              src="/top/top-mypic.png"
              width={190}
              height={175}
              layout="intrinsic"
              alt="siino_picture"
            />
            <div>
              <h4>siino</h4>
              <div className={styles.pt}>
                <p>
                  鳥取県出身の1995/04/27生まれ、現在は大坂在住のフリーランスエンジニア/デザイナー。基本的には一人でやらしてもろてます。
                </p>
                <p>
                  もともとはWordPressでのサイト開発をメインに活動していましたが、「Jamstack最強すぎひん？」ということに気づいてしまい、今に至ります。
                </p>
                <p>
                  因みにウェブやる前はテレビ局の報道部門で働いていたりしました。
                </p>
                <p>写真は廃炭鉱です。Twitterフォローしてください。</p>
              </div>
            </div>
          </div>

          <div className={styles.flexCol}>
            <a
              href="https://twitter.com/SE_27_Jamstack"
              target="_blank"
              rel="noopener"
            >
              <div className={styles.snsLink}>
                <span>Twitter</span>
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
              <div className={styles.snsLink}>
                <span>github</span>
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
      </main>
    </section>
  );
}
