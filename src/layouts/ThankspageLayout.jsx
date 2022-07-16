import styles from "../styles/layouts/underpage-layout.module.scss";

export default function ThankspageLayout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}
