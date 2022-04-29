import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/layouts/underpage-layout.module.scss";
import { pageFadein } from "../hooks/fadeIn";

export default function UnderpageLayout({ children }) {
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <div
      className={styles.container}
      ref={fadeTargetRef}
      id={domId}
      style={{ opacity: 0 }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
