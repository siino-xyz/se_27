import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToBlogTop } from "./BreadCrumb.css";
import { ICategories, IArticles } from "@types";

type BreadCrumbProps = {
  article?: IArticles;
  category?: ICategories;
};

export const Breadcrumb = ({ article, category }: BreadCrumbProps) => {
  const router = useRouter();
  const path = router.asPath;
  const isCategoryPage = /\/category\/.+$/.test(path);
  console.log(path);

  // const hasCategory = (category?: ICategories) => {
  //   if (!category) {
  //     return false;
  //   }
  //   return Object.keys(category).length > 0;
  // };

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

      {isCategoryPage && (
        <Link
          className={sprinkles({
            color: "gray1",
            fontSize: "sm",
          })}
          href={path}
          as={path}
          passHref
        >
          <a>{category.name}</a>
        </Link>
      )}

      <span
        className={sprinkles({
          color: "gray1",
          paddingBottom: "size-1",
          fontSize: "sm",
        })}
      >
        &gt;
      </span>

      {article && (
        <span
          className={sprinkles({
            color: "gray1",
            fontSize: "sm",
          })}
        >
          {article.title}
        </span>
      )}
    </nav>
  );
};
