import * as React from "react";
import Image from "next/image";
import { LinkButton, SectionTitle } from "@components";
import { sprinkles } from "@css-utils";

export const ThankPageContent = React.memo(function thankPageContentMemo() {
  return (
    <>
      <main>
        <SectionTitle largeText="Send Completed." smallText="送信完了" />

        <section
          className={sprinkles({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "size-full",
            marginX: "size-auto",
          })}
        >
          <Image
            src="/thanks/thanks-plane.svg"
            width={335}
            height={148}
            layout="intrinsic"
            alt="send-completed"
          />
          <p
            className={sprinkles({
              paddingTop: "size-4",
            })}
          >
            SE-27へお問い合わせいただき、ありがとうございます。1営業日以内に折り返しご連絡致しますので、今しばらくお待ちくださいませ。
          </p>
        </section>
        <LinkButton
          url={"/"}
          text={"トップーページに戻る"}
          buttonDisplay={"block"}
        />
      </main>
    </>
  );
});
