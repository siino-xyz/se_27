import Image from "next/image";
import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/linkButton/LinkButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TextWithImage from "../../components/textWithImage/TextWithImage";

export default function Solution() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle
        largeText="Solution"
        smallText="高速＆セキュアなウェブサイトを低コストで"
      />

      {/* <main className={styles.sectionInner}>
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
            <LinkButton url={"/jamstack"} text="Jamstackについて知る" />
          </div>
        </div>
      </main> */}
      <TextWithImage
        title={null}
        para=" 初めから高速で安全なホームページを作ってしまえば、ランニングコストを抑えられるだけでなく、快適な運用が可能になると思いませんか？SE-27では高速で安全なウェブサイトをより低コストで構築するために、Jamstackというアーキテクチャを採用しています。"
        width={598}
        height={243}
        alt="solution_image"
        src="/top/top-solution.png"
        url="/jamstack"
        text="Jamstackについて知る"
        buttonDisplay="block"
      />
    </section>
  );
}
