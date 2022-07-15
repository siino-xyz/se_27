import { sprinkles } from "src/css-utils/sprinkles.css";
import * as React from "react";

type Props = {
  title: string | null;
};
const InnerTitle: React.FC<Props> = React.memo(function InnerTitleMemo({
  title,
}) {
  return (
    <div
      className={sprinkles({
        fontSize: "xl",
      })}
    >
      <h3>{title}</h3>
    </div>
  );
});

export default InnerTitle;
