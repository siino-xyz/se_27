import Link from "next/link";
import { IArticles, ICategories } from "@types";

type BreadCrumbProps = {
  category: ICategories;
  article: IArticles;
};

export const BreadCrumb = ({ category, article }: BreadCrumbProps) => {
  const hasCategory = (category?: ICategories) => {
    if (!category) {
      return false;
    }
    return Object.keys(category).length > 0;
  };
  return (
    <ul>
      <li>
        <Link href="/" prefetch={false}>
          <a>記事一覧</a>
        </Link>
      </li>
      {hasCategory(category) && (
        <li>
          <Link href="/category/">
            <a></a>
          </Link>
        </li>
      )}
      <li>
        <Link href="/">
          <a>記事一覧</a>
        </Link>
      </li>
    </ul>
  );
};
