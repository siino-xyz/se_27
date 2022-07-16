import Link from "next/link";
import { Articles } from "src/types";
import Image from "next/image";
import styles from "../../styles/components/articlecard.module.scss";
import { Card } from "./ArticleCard.css";
import dayjs from "dayjs";
import { sprinkles } from "@css-utils/sprinkles.css";

const ArticleCard = ({ articles }: { articles: Articles[] }) => {
  return (
    <>
      <div
        className={sprinkles({
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: {
            mobile: "grid-cols-1",
            desktop: "grid-cols-4",
          },
          marginX: "size-12",
          gap: "size-6",
        })}
      >
        {articles.map((articles) => (
          <div key={articles.id} className={Card}>
            <Link href={`/articles/${articles.id}`} passHref>
              <a>
                <Image
                  src={articles.eye_catch.url}
                  width={330}
                  height={163}
                  layout="responsive"
                  alt="eye_catch"
                />
              </a>
            </Link>

            <div className={styles.sumallyWrapper}>
              <div>
                <div
                  className={sprinkles({
                    background: "sub",
                    color: "black",
                    display: "inline-block",
                    paddingX: "size-1.5",
                    paddingY: "size-1",
                    fontSize: "sm",
                    fontWeight: "bold",
                    borderRadius: "size-1",
                  })}
                >
                  {articles.categories.name}
                </div>
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
