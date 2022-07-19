import { sprinkles } from "@css-utils/sprinkles.css";
import * as React from "react";
import { Category } from "@types";
import Link from "next/link";

const PostTag: React.FC<Category> = ({ name, id }) => {
  return (
    <Link href={`/category/page/${id}`} key={id}>
      <div
        className={sprinkles({
          background: "sub",
          color: "black",
          display: "inline-block",
          paddingX: "size-1.5",
          paddingY: "size-1",
          fontSize: "sm",
          fontWeight: "bold",
          borderRadius: "size-1",
        })}
      >
        {name}
      </div>
    </Link>
  );
};

export default PostTag;
