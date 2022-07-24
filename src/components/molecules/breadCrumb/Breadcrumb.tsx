import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToBlogTop } from "./BreadCrumb.css";
import { ICategories } from "@types";

type BreadCrumbProps = {
  category?: ICategories;
};

export const Breadcrumb = ({ category }: BreadCrumbProps) => {
  const router = useRouter();
  const path = router.asPath;
  // const isCategoryPage = /\/category\/.+$/.test(path);

  const hasCategory = (category?: ICategories) => {
    if (!category) {
      console.log("has not category.");
      return false;
    }
    return Object.keys(category).length > 0;
  };
  return (
    <nav
      className={sprinkles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "size-2",
        marginY: "size-4",
      })}
    >
      <Link href="/blog">
        <a className={ToBlogTop}>ブログトップ</a>
      </Link>

      {hasCategory(category) && (
        <Link
          className={sprinkles({
            color: "gray1",
            fontSize: "sm",
          })}
          href={path}
          as={path}
          passHref
        >
          <a>{category?.name}</a>
        </Link>
      )}
    </nav>
  );
};
