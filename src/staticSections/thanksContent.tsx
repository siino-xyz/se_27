import Image from "next/image";
import LinkButton from "../components/linkButton/LinkButton";
import styles from "../styles/staticSections/thanks.module.scss";
export const ThanksContent = () => {
  return (
    <>
      <section className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Send Completed</h2>
          <div className={styles.subscript}>送信完了</div>
        </div>
        <main className={styles.sectionInner}>
          <Image
            src="/thanks/thanks-plane.svg"
            width={335}
            height={148}
            layout="intrinsic"
            alt="send-completed"
          />
          <p>
            SE-27へお問い合わせいただき、ありがとうございます。1営業日以内に折り返しご連絡致しますので、今しばらくお待ちくださいませ。
          </p>
        </main>
      </section>
      <LinkButton
        url={"/"}
        text={"トップーページに戻る"}
        buttonDisplay={"block"}
      />
    </>
  );
};

export default ThanksContent;
