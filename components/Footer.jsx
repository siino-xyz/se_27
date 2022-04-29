import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <Link href="/" passHref>
          <Image
            src="/global/se-27_footer_logo.svg"
            width={338}
            height={107}
            alt="se-27_logo"
            layout="intrinsic"
          />
        </Link>
      </div>

      <div className={styles.copylight}>© 2022 SE-27</div>
    </div>
  );
}
