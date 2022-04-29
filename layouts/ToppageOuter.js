import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstView from "../sections/FirstView";
import styles from "../styles/layouts/toppage-outer.module.scss";
import { pageFadein } from "../hooks/fadeIn";

export default function ToppageLayout({ children }) {
  const { fadeTargetRef, domId } = pageFadein();
  return (
    <div
      className={styles.toppageLayout}
      ref={fadeTargetRef}
      id={domId}
      style={{ opacity: 0 }}
    >
      <Header />
      <FirstView />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
