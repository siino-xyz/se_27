import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/breadcrumb.module.scss";

const Breadcrumb = ({ categories, articles }) => {
  const router = useRouter();
  const path = router.asPath;
  console.log(router.asPath);
  const isCategoryPage = /\/category\/.+$/.test(path);
  console.log(isCategoryPage);

  return (
    <>
      <div className={styles.breadcrumbContainer}>
        <div>
          <Link href="/blog">
            <a>
              <div className={styles.breadcrumbItem}>ブログトップ</div>
            </a>
          </Link>
        </div>
        {isCategoryPage && (
          <>
            <div className={styles.breadcrumbItem}>
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
            <div className={`${styles.torightArrow} ${styles.breadcrumbItem}`}>
              &gt;
            </div>
            <div className={styles.breadcrumbItem}>{articles.title}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Breadcrumb;
