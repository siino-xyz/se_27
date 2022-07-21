import * as React from "react";
import { sprinkles } from "@css-utils/sprinkles.css";
import { CategoryTag } from "@components/atoms/categoryTag/CategoryTag";
import { ICategories } from "@types";

type CategoriesProps = {
  categories: ICategories[];
};

export const CategoriesLinks: React.FC<CategoriesProps> = React.memo(
  function CategoryTagsMemo(props) {
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
        {props.categories.map((categories) => {
          return (
            <CategoryTag
              name={categories.name}
              id={categories.id}
              key={categories.id}
            />
          );
        })}
      </div>
    );
  }
);
