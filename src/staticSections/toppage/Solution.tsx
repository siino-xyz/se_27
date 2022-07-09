import Image from "next/image";
import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/LinkButton";
export default function Solution() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Solution</h2>
        <div className={styles.subscript}>
          高速＆セキュアなウェブサイトを低コストで
        </div>
      </div>

      <main className={styles.sectionInner}>
        <div className={styles.grid}>
          <div className={styles.solutionImage}>
            <Image
              src="/top/top-solution.png"
              width={598}
              height={243}
              layout="intrinsic"
              alt="solution_image"
            />
          </div>

          <div>
            <p>
              初めから高速で安全なホームページを作ってしまえば、ランニングコストを抑えられるだけでなく、快適な運用が可能になると思いませんか？
            </p>
            <p>
              SE-27では高速で安全なウェブサイトをより低コストで構築するために、Jamstackというアーキテクチャを採用しています。
            </p>
            <LinkButton url={"/jamstack"} button="Jamstackについて知る" />
          </div>
        </div>
      </main>
    </section>
  );
}
