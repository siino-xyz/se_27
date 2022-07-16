import { sprinkles } from "../css-utils/sprinkles.css";
import ArticleCard from "../components/ArticleCard";
import LinkButton from "../components/linkButton/LinkButton";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import TextAndButtonBlock from "../components/textAndButtonBlock/TextAndButtonBlock";
import StaticContentUtilBlock from "../components/staticContentUtilBlock/StaticContentUtilBlock";
import Meta from "../layouts/Meta";
import ToppageLayout from "../layouts/ToppageOuter";
import InnerLayout from "../layouts/GlobalInner";
import Isuues from "../templates/issues/Issues";

export default function Top({ articles }) {
  return (
    <>
      <div
        className={sprinkles({
          width: "size-0.9",
          marginX: "size-auto",
          marginY: "size-12",
        })}
      >
        <main>
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
          <ArticleCard articles={articles} />
          <LinkButton url={"/blog"} text="記事一覧" buttonDisplay="block" />
        </main>
      </div>
    </>
  );
}

Top.getLayout = function getLayout(top) {
  return (
    <Meta>
      <ToppageLayout>
        <InnerLayout>{top}</InnerLayout>
      </ToppageLayout>
    </Meta>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  };
  const data = await fetch(
    "https://kp822wg687.microcms.io/api/v1/articles?offset=0&limit=3",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};
