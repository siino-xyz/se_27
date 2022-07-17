import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToBlogTop } from "./BreadCrumb.css";

const Breadcrumb = ({ categories, articles }) => {
  const router = useRouter();
  const path = router.asPath;
  const isCategoryPage = /\/category\/.+$/.test(path);

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
          <a>{categories.name}</a>
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

      {articles && (
        <span
          className={sprinkles({
            color: "gray1",
            fontSize: "sm",
          })}
        >
          {articles.title}
        </span>
      )}
    </nav>
  );
};

export default Breadcrumb;
