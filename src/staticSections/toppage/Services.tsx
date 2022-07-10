import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";
import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

type Props = {
  title: string;
  para: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Items: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        className={sprinkles({
          fontSize: "xl",
        })}
      >
        <h3>{props.title}</h3>
      </div>
      <div
        className={sprinkles({
          display: "grid",
          gridTemplateColumns: {
            mobile: "grid-cols-1",
            desktop: "grid-cols-2",
          },
          alignItems: "center",
        })}
      >
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          layout="intrinsic"
          alt={props.alt}
        />
        <p>{props.para}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className={styles.sectionContainer}>
      <SectionTitle largeText="Services" smallText="SE-27のサービス" />
      <main className={styles.sectionInner}>
        <Items
          title="ウェブサイト制作"
          para=" SE-27では、Jamstackアーキテクチャを用いたウェブサイト（ホームーページ）制作を専門としています。Next.js,Gatsby.jsなどのモダンなReact系フレームワークをベースに、運用ニーズに応じた柔軟な設計を行います。"
          width={300}
          height={200}
          alt="ウェブサイト制作"
          src="/top/tag.svg"
        />
        <Items
          title="ウェブデザイン"
          para="「ホームページを作る目的はなにか？」「誰に何を伝えたいのか」といった問いからスタートします。デザインは目的を達成するための手段であるという考えのもと、期待する結果を得るためのデザイン・導線設計を構築します。"
          width={300}
          height={200}
          alt="ウェブデザイン"
          src="/top/des.svg"
        />
      </main>
    </section>
  );
};

export default Services;
