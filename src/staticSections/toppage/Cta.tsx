import styles from "../../styles/staticSections/toppage.module.scss";
import TextAndButtonBlock from "src/components/textAndButtonBlock/TextAndButtonBlock";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Cta = () => {
  return (
    <section className={styles.sectionContainer}>
      <SectionTitle largeText="Contact" smallText="お問い合わせ" />

      <TextAndButtonBlock
        paragraph="詳しい話を聞いてみたいと思ったら、このサイトのContactページ、もしくは当方のTwitterアカウント（@SE_27_Jamstack）のDMからお気軽にお声がけ下さい。"
        url="/contact"
        buttonText="SE-27に相談する"
        buttonDisplay="block"
      />
    </section>
  );
};

export default Cta;
