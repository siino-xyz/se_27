import * as React from "react";
import { sprinkles } from "@css-utils/sprinkles.css";
import { Category } from "src/types";
import CategoryTag from "@components/atoms/categoryTag/CategoryTag";

export const CategoryTags = React.memo(function CategoryTagsMemo({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "size-4",
      })}
    >
      {categories.map((categories) => {
        return <CategoryTag name={categories.name} id={categories.id} />;
      })}
    </div>
  );
});

export default CategoryTags;
