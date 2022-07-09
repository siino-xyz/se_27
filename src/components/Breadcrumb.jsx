import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/breadcrumb.module.scss";

const Breadcrumb = ({ categories, articles }) => {
  const router = useRouter();
  const path = router.asPath;
  const isCategoryPage = /\/category\/.+$/.test(path);

  return (
    <>
      <div className={styles.breadcrumbContainer}>
        <Link className={styles.colorChange} href="/blog">
          <a>
            <div className={`${styles.changeColor} ${styles.item}`}>
              ブログトップ
            </div>
          </a>
        </Link>
        {isCategoryPage && (
          <>
            <div className={styles.item}>
              <Link href={path} as={path} passHref>
                <a>
                  <div>{categories.name}</div>
                </a>
              </Link>
            </div>
          </>
        )}
        {articles && (
          <>
            <div className={`${styles.torightArrow} ${styles.item}`}>&gt;</div>
            <div className={styles.item}>{articles.title}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Breadcrumb;
