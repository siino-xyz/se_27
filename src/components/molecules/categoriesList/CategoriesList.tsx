import * as React from "react";
import { sprinkles } from "@css-utils/sprinkles.css";
import { CategoryLinkButton } from "@components";
import { ICategories } from "@types";

type CategoriesProps = {
  categories: ICategories[];
};

export const CategoriesList: React.FC<CategoriesProps> = React.memo(
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
        {props.categories.map((category) => (
          <div key={category.id}>
            <CategoryLinkButton categories={category} />;
          </div>
        ))}
      </div>
    );
  }
);
