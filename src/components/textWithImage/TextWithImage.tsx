import Image from "next/image";
import * as React from "react";
import { sprinkles } from "../../css-utils/sprinkles.css";
import LinkButton from "../linkButton/LinkButton";
import Paragraph from "../paragraph/Paragraph";
import InnerTitile from "../innerTitle/InnerTitle";
import StaticImage from "../staticImage/StaticImage";

type Props = {
  title: string | null;
  para: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  layout: "fixed" | "fill" | "intrinsic" | "responsive";
  url: string | null;
  text: string | null;
  buttonDisplay: "none" | "block";
};
/*
  このコンポーネントの問題点を考える
  画像・テキスト、そしてレイアウトをごっちゃに引き受けている状態なので、これを責務分割する必要がある。
  リンクボタンだけは別コンポーネント化しているので、これはそのまま。
  
  まずやることとしては、画像とテキストをそれぞれ独立したコンポーネントとして切り出してしまい、ここから除外します。
  そうすると、画像・テキスト・ボタンの3つの独立したコンポーネントをここに呼び出す形になります。
  ほんでこのコンポーネントの役割は、呼び出したコンポーネントたちをレイアウトするだけになるので、きれいに責務分割ができるはず。

  TODO:
  // - StaticImage  コンポーネントの作成
  // - InnerTItle コンポーネントの作成
  // - Paragraphコンポーネントの作成
*/

const TextWithImage: React.FC<Props> = React.memo(function TextWithImageMemo(
  props
) {
  return (
    <>
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
          layout={props.layout}
          alt={props.alt}
        />
        <div>
          <p>{props.para}</p>

          <LinkButton
            url={props.url}
            text={props.text}
            buttonDisplay={props.buttonDisplay}
          />
        </div>
      </div>
    </>
  );
});

export default TextWithImage;
