import Link from "next/link";
import { Articles } from "src/types";
import Image from "next/image";
import dayjs from "dayjs";
import { sprinkles } from "@css-utils/sprinkles.css";
import { Card, Captions, PostTitle, DateTag } from "./ArticleCard.css";

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
          <article key={articles.id} className={Card}>
            <Link href={`/articles/${articles.id}`} passHref>
              <a>
                <Image
                  src={articles.eye_catch.url}
                  width={330}
                  height={163}
                  layout="responsive"
                  alt="eye_catch"
                />

                <div className={Captions}>
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
                  <h2 className={PostTitle}>{articles.title}</h2>
                  <div className={DateTag}>
                    {dayjs(articles.publishedAt)
                      .locale("ja")
                      .format("YYYY/MM/DD")}
                  </div>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
};

export default ArticleCard;
