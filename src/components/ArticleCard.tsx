import Link from "next/link";
import { Articles } from "src/types";
import Image from "next/image";
import styles from "../styles/components/articlecard.module.scss";

import dayjs from "dayjs";

const ArticleCard = ({ articles }: { articles: Articles[] }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        {articles.map((articles) => (
          <div key={articles.id} className={styles.card}>
            <Link href={`/articles/${articles.id}`} passHref>
              <a>
                <div className={styles.eyeCatch}>
                  <Image
                    className={styles.eyeCatchImg}
                    src={articles.eye_catch.url}
                    width={330}
                    height={163}
                    layout="responsive"
                    alt="eye_catch"
                  />
                </div>
              </a>
            </Link>

            <div className={styles.sumallyWrapper}>
              <div>
                <div className={styles.tag}>{articles.categories.name}</div>
                <Link href={`/articles/${articles.id}`} passHref>
                  <a>
                    <h1>{articles.title}</h1>
                  </a>
                </Link>
              </div>
              <div>
                <div className={styles.date}>
                  {dayjs(articles.publishedAt)
                    .locale("ja")
                    .format("YYYY/MM/DD")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticleCard;
