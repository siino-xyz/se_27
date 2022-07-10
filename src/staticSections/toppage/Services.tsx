import styles from "../../styles/staticSections/toppage.module.scss";
import * as React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import TextWithImage from "../../components/textWithImage/TextWithImage";
import { sprinkles } from "../../css-utils/sprinkles.css";

const Services = React.memo(() => {
  return (
    <section
      id="services"
      className={sprinkles({
        width: "size-0.9",
        marginX: "size-auto",
      })}
    >
      <SectionTitle largeText="Services" smallText="SE-27のサービス" />
      <TextWithImage
        title="ウェブサイト制作"
        para=" SE-27では、Jamstackアーキテクチャを用いたウェブサイト（ホームーページ）制作を専門としています。Next.js,Gatsby.jsなどのモダンなReact系フレームワークをベースに、運用ニーズに応じた柔軟な設計を行います。"
        width={300}
        height={200}
        alt="ウェブサイト制作"
        src="/top/tag.svg"
        url={null}
        text={null}
        buttonDisplay="none"
      />
      <TextWithImage
        title="ウェブデザイン"
        para="「ホームページを作る目的はなにか？」「誰に何を伝えたいのか」といった問いからスタートします。デザインは目的を達成するための手段であるという考えのもと、期待する結果を得るためのデザイン・導線設計を構築します。"
        width={300}
        height={200}
        alt="ウェブデザイン"
        src="/top/des.svg"
        url={null}
        text={null}
        buttonDisplay="none"
      />
    </section>
  );
});

export default Services;
