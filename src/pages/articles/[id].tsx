import * as React from "react";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import dayjs from "dayjs";
import { client } from "@libs/client";
import { LinkButton, OgpImage, Header } from "@components";
import { customImage, pageFadein } from "@hooks";
import { getContents, getContentId } from "@libs/blog";
import { IArticles, ICategories } from "@types";

type ArticleProps = {
  articles: IArticles[];
  article: IArticles;
  categories: ICategories;
};

const Article: React.FC<ArticleProps> = (props) => {
  const { ogImageUrl } = customImage(
    props.article.ogp_image.url,
    props.article.title
  );
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <>
      <OgpImage
        pagetitle={props.article.title}
        pagedescription={props.article.description}
        pagepath={`props.articles/${props.article.id}`}
        postimg={ogImageUrl}
      />

      <Header />
      <div ref={fadeTargetRef} id={domId} style={{ opacity: 0 }}>
        <div>
          {/* <Breadcrumb articles={props.articles} categories={props.categories} /> */}
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
