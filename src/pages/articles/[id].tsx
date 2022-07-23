import * as React from "react";
import { GetStaticPropsContext } from "next";
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import dayjs from "dayjs";
import { client } from "@libs";
import { LinkButton } from "@components";
import { pageFadein } from "@hooks";
import { getContents, getContentId } from "@libs/blog";
import { IArticles, ICategories } from "@types";
import { Seo } from "@components";
import { WithoutFV } from "@layouts";

type ArticleProps = {
  articles: IArticles[];
  article: IArticles;
  categories: ICategories;
  layout?: React.ReactElement;
};

const Article: NextPageWithLayout<ArticleProps> = (props) => {
  const { fadeTargetRef, domId } = pageFadein();
  console.log(Object.keys(props.article));

  return (
    <>
      <Seo
        ogpurl={props.article.ogp_image.url}
        ogptitle={props.article.title}
      />
      <div ref={fadeTargetRef} id={domId} style={{ opacity: 0 }}>
        <div>
          <Image
            src={props.article.eye_catch.url}
            width={944}
            height={465}
            layout="responsive"
            alt="eye_catch"
          />

          <section>
            <div>
              <div>{props.article.categories.name}</div>
              <h1>{props.article.title}</h1>
              <div>
                {dayjs(props.article.publishedAt)
                  .locale("ja")
                  .format("YYYY/MM/DD")}
              </div>
            </div>

            <main>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${props.article.body}`,
                }}
              />
            </main>

            {/* <ShareButtons props.articles={props.articles} /> */}
            <LinkButton
              url={"/blog"}
              text={"他の記事も読む"}
              buttonDisplay={"block"}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Article;

Article.getLayout = function getLayout(page: React.ReactElement) {
  return <WithoutFV>{page}</WithoutFV>;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { articles, categories } = await getContents();
  const id: any = context.params?.id;
  const article = await getContentId(id);
  return {
    props: {
      article,
      articles,
      categories,
    },
  };
};
