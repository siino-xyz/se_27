import React from "react";
import type { ReactElement } from "react";
import ArticleCard from "../components/organisms/articleCard/ArticleCard";
import LinkButton from "../components/atoms/linkButton/LinkButton";
import SectionTitle from "../components/atoms/sectionTitle/SectionTitle";
import TextAndButtonBlock from "../components/organisms/textAndButtonBlock/TextAndButtonBlock";
import StaticContentUtilBlock from "../components/organisms/staticContentUtilBlock/StaticContentUtilBlock";
import Meta from "../layouts/Meta";
import IncludingFV from "../layouts/IncludingFV";
import Isuues from "../components/templates/issues/Issues";
import type { NextPageWithLayout } from "next";
import { IArticles } from "@types";
import { getNewestArticles } from "@libs/blog";

type TopPageProps = {
  articles: IArticles[];
};

const TopPage: NextPageWithLayout<TopPageProps> = React.memo(
  function TopPageMemo(props) {
    return (
      <>
        <section>
          <SectionTitle largeText="Services" smallText="SE-27のサービス" />
          <StaticContentUtilBlock
            title="ウェブサイト制作"
            para=" SE-27では、Jamstackアーキテクチャを用いたウェブサイト（ホームーページ）制作を専門としています。Next.js,Gatsby.jsなどのモダンなReact系フレームワークをベースに、運用ニーズに応じた柔軟な設計を行います。"
            width={300}
            height={200}
            alt="ウェブサイト制作"
            src="/top/tag.svg"
            layout="intrinsic"
            url={null}
            text={null}
            buttonDisplay="none"
          />
          <StaticContentUtilBlock
            title="ウェブデザイン"
            para="「ホームページを作る目的はなにか？」「誰に何を伝えたいのか」といった問いからスタートします。デザインは目的を達成するための手段であるという考えのもと、期待する結果を得るためのデザイン・導線設計を構築します。"
            width={300}
            height={200}
            alt="ウェブデザイン"
            src="/top/des.svg"
            layout="intrinsic"
            url={null}
            text={null}
            buttonDisplay="none"
          />
        </section>

        <Isuues />

        <section>
          <SectionTitle
            largeText="Solution"
            smallText="高速＆セキュアなウェブサイトを低コストで"
          />
          <StaticContentUtilBlock
            title={null}
            para=" 初めから高速で安全なホームページを作ってしまえば、ランニングコストを抑えられるだけでなく、快適な運用が可能になると思いませんか？SE-27では高速で安全なウェブサイトをより低コストで構築するために、Jamstackというアーキテクチャを採用しています。"
            width={598}
            height={243}
            layout="responsive"
            alt="solution_image"
            src="/top/top-solution.png"
            url="/jamstack"
            text="Jamstackについて知る"
            buttonDisplay="block"
          />
        </section>

        <section>
          <SectionTitle largeText="Flow" smallText="SE-制作の流れとQ&A" />
          <TextAndButtonBlock
            paragraph="安心してご依頼頂けるよう、制作の流れとよくあるご質問について紹介しています。"
            url="/flow"
            buttonText="制作の流れを見る"
            buttonDisplay="block"
          />
        </section>

        <section>
          <SectionTitle largeText="Contact" smallText="お問い合わせ" />
          <TextAndButtonBlock
            paragraph="詳しい話を聞いてみたいと思ったら、このサイトのContactページ、もしくは当方のTwitterアカウント（@SE_27_Jamstack）のDMからお気軽にお声がけ下さい。"
            url="/contact"
            buttonText="SE-27に相談する"
            buttonDisplay="block"
          />
        </section>

        <SectionTitle largeText="Blog" smallText="ブログ" />
        <ArticleCard articles={props.articles} />
        <LinkButton url={"/blog"} text="記事一覧" buttonDisplay="block" />
      </>
    );
  }
);

export default TopPage;

TopPage.getLayout = function getLayout(top: ReactElement) {
  return (
    <Meta>
      <IncludingFV>{top}</IncludingFV>
    </Meta>
  );
};

export const getStaticProps = async () => {
  const { articles } = await getNewestArticles();
  return {
    props: {
      articles,
    },
  };
};
