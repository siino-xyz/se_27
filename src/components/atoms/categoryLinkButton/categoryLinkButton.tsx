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
    <Link href={`/category/[categoryId]/page/${categories.id}`} passHref>
      <div
        className={sprinkles({
          background: { lightMode: "black", darkMode: "white" },
          color: { lightMode: "white", darkMode: "black" },
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
