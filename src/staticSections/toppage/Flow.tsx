import styles from "../../styles/staticSections/toppage.module.scss";
import LinkButton from "../../components/linkButton/LinkButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TextAndButtonBlock from "src/components/textAndButtonBlock/TextAndButtonBlock";

export default function Flow() {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle largeText="Flow" smallText="SE-制作の流れとQ&A" />

      <TextAndButtonBlock
        paragraph="安心してご依頼頂けるよう、制作の流れとよくあるご質問について紹介しています。"
        url="/flow"
        buttonText="制作の流れを見る"
        buttonDisplay="block"
      />
    </section>
  );
}
