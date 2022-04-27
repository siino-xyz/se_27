import styles from "../styles/sections/flow.module.scss";
import LinkButton from "../components/LinkButton";

export default function Flow() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.ttlWrapper}>
        <h2 className={styles.sectionTitle}>
          Flow
          <br />
          <div className={styles.subscriptJp}>制作の流れ</div>
        </h2>
      </div>

      <div className={styles.sectionInner}>
        <div className={styles.twoColumns}>
          <div>
            <p>制作の流れとよくあるご質問をここにまとめています。</p>
          </div>
          <div className={styles.r}>
            <LinkButton url={"/flow"} button="制作の流れを見る" />
          </div>
        </div>
      </div>
    </div>
  );
}
