import styles from "../../styles/staticSections/toppage.module.scss";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import StaticContentUtilBlock from "../../components/staticContentUtilBlock/StaticContentUtilBlock";

export default function Solution() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle
        largeText="Solution"
        smallText="高速＆セキュアなウェブサイトを低コストで"
      />
      <StaticContentUtilBlock
        title={null}
        para=" 初めから高速で安全なホームページを作ってしまえば、ランニングコストを抑えられるだけでなく、快適な運用が可能になると思いませんか？SE-27では高速で安全なウェブサイトをより低コストで構築するために、Jamstackというアーキテクチャを採用しています。"
        width={598}
        height={243}
        layout="responsive"
        alt="solution_image"
        src="/top/top-solution.png"
        url="/jamstack"
        text="Jamstackについて知る"
        buttonDisplay="block"
      />
    </section>
  );
}
