import * as React from "react";
import Link from "next/link";
import { sprinkles } from "@css-utils";
import { ICategories } from "@types";

export const CategoryLinkButton = ({
  categories,
}: {
  categories: ICategories;
}) => {
  return (
    <Link
      href={`/blog/category/${categories.id} `}
      // as={`/category/${categories.id}/page/1`}
      passHref
    >
      <div
        className={sprinkles({
          background: { darkMode: "white" },
          color: { darkMode: "black" },
          display: "inline-block",
          paddingX: "size-1.5",
          paddingY: "size-0.5",
          fontSize: "sm",
          fontWeight: "bold",
          borderRadius: "size-0.5",
        })}
      >
        {categories.name}
      </div>
    </Link>
  );
};
