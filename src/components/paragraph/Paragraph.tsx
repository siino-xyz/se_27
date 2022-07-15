import { sprinkles } from "src/css-utils/sprinkles.css";
import * as React from "react";

type Props = {
  paragraph: string | null;
};
const Paragraph: React.FC<Props> = React.memo(function ParagraphMemo({
  paragraph,
}) {
  return <p>{paragraph}</p>;
});

export default Paragraph;
