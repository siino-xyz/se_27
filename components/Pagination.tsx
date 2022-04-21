import Link from "next/link";
import styles from "../styles/components/pagination.module.scss";

type P = {
  maxPageNumber: number;
  currentPageNumber: number;
};

export const PaginationArrow: React.FC<P> = ({
  maxPageNumber,
  currentPageNumber,
}) => {
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.paginationItem}>
        {currentPageNumber !== 1 && (
          <Link href={`/articles/page/${prevPage}`}>
            <a data-testid="previous">
              <div className={styles.prevPageBtn}>もどる</div>
            </a>
          </Link>
        )}
      </div>
      <div className={styles.paginationItem}>
        {currentPageNumber !== maxPageNumber && (
          <Link href={`/articles/page/${nextPage}`}>
            <a data-testid="next">
              <div className={styles.nextPageBtn}>すすむ</div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaginationArrow;
