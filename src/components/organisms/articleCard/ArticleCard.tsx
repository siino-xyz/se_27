import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryTag } from "@components/atoms/categoryTag/CategoryTag";
import { PostDate } from "@components/atoms/postDate/PostDate";
import { sprinkles } from "@css-utils/sprinkles.css";
import { Card, Captions, PostTitle } from "./ArticleCard.css";
import { IArticles } from "src/types";

type ArticleCardProps = {
  articles: Array<IArticles>;
};

export const ArticleCard: React.FC<ArticleCardProps> = React.memo(
  function ArticleCardMemo(props) {
    return (
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
        {props.articles.map((articles) => (
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
                  <CategoryTag
                    name={articles.categories.name}
                    id={articles.id}
                  />
                  <h2 className={PostTitle}>{articles.title}</h2>
                  <PostDate date={articles.publishedAt} />
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    );
  }
);
