import { client } from "../../libs/client";
import Image from "next/image";
import dayjs from "dayjs";
import { pageFadein } from "@hooks/fadeIn";

// import ShareButtons from "@components/ShareButtons";
import LinkButton from "@components/atoms/linkButton/LinkButton";
import CustomImage from "@components/atoms/customImage/CustomImage";
import NextOgp from "@components/atoms/nextOgp/NextOgp";
import Breadcrumb from "@components/molecules/breadCrumb/Breadcrumb";
import Header from "@components/organisms/header/Header";

const ArticlesId = ({ articles, categories }) => {
  const { ogImageUrl } = CustomImage(articles.ogp_image.url, articles.title);
  const { fadeTargetRef, domId } = pageFadein();

  return (
    <>
      <NextOgp
        pagetitle={articles.title}
        pagedescription={articles.description}
        pagepath={`articles/${articles.id}`}
        postimg={ogImageUrl}
      />

      <Header />
      <div ref={fadeTargetRef} id={domId} style={{ opacity: 0 }}>
        <div>
          <Breadcrumb articles={articles} categories={categories} />
          <Image
            src={articles.eye_catch.url}
            width={944}
            height={465}
            layout="responsive"
            alt="eye_catch"
          />

          <section>
            <div>
              <div>{articles.categories.name}</div>
              <h1>{articles.title}</h1>
              <div>
                {dayjs(articles.publishedAt).locale("ja").format("YYYY/MM/DD")}
              </div>
            </div>

            <main>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${articles.body}`,
                }}
              />
            </main>

            {/* <ShareButtons articles={articles} /> */}
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

export default ArticlesId;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      articles: data,
      categories: categoryData.contents,
    },
  };
};
