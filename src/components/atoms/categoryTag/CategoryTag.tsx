import { sprinkles } from "@css-utils/sprinkles.css";
import * as React from "react";
import Link from "next/link";

type CategoryTagProps = {
  name: string;
  id: string;
};

const CategoryTag: React.FC<CategoryTagProps> = ({ name, id }) => {
  return (
    <Link href={`/category/page/${id}`} key={id} passHref>
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
        {name}
      </div>
    </Link>
  );
};

export default CategoryTag;
