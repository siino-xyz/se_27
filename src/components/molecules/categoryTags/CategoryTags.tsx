import Link from "next/link";
import * as React from "react";
import { Category } from "src/types";
import { sprinkles } from "@css-utils/sprinkles.css";
import { CategoryTag } from "./CategoryTags.css";

type CategoryTagsProps = {
  categories: Array<Category>;
};
export const CategoryTags = ({ categories }: CategoryTagsProps) => {
  return (
    <div
      className={sprinkles({
        paddingTop: "size-24",
      })}
    >
      {/* <h3>Category</h3> */}
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "size-4",
        })}
      >
        <div className={CategoryTag}>
          <Link href={"/blog"}>
            <a
              className={sprinkles({
                color: "black",
                fontWeight: "bold",
                textDecoration: "none",
              })}
            >
              All
            </a>
          </Link>
        </div>
        {categories.map((categories) => {
          return (
            <div className={CategoryTag} key={categories.id}>
              <Link href={`/category/page/${categories.id}`}>
                <a
                  className={sprinkles({
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none",
                  })}
                >
                  {categories.name}
                </a>
              </Link>
            </div>
            // <PostTag

            // />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTags;
