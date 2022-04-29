import Image from "next/image";
import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";
export default function Solution() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Solution
          <br />
          <div className={styles.subscriptJp}>
            高速でセキュアなウェブサイトを低コストで
          </div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div>
            <Image
              src="/top/top-solution.png"
              width={598}
              height={243}
              layout="intrinsic"
              alt="solution_image"
            />
          </div>

          <div className={styles.noWrapFlex}>
            <div>
              <p>
                初めからハイパフォーマンスでセキュアなホームページを作ってしまえば、ランニングコストを抑えられるだけでなく、快適な運用が可能となります。
                <br />
                Jamstackは、より速いウェブサイトを低コストかつスピーディに構築する方法のひとつとして有力なオプションです。速さ以外にもさまざまなメリットがあります。
              </p>
            </div>
            <div>
              <LinkButton url={"/jamstack"} button="Jamstackについて知る" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
