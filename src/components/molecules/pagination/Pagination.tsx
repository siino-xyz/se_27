import { sprinkles } from "@css-utils/sprinkles.css";
import Link from "next/link";
import * as React from "react";

type P = {
  maxPageNumber: number;
  currentPageNumber: number;
};

export const PaginationArrow: React.FC<P> = React.memo(
  function PaginationArrowMemo({ maxPageNumber, currentPageNumber }) {
    const prevPage = currentPageNumber - 1;
    const nextPage = currentPageNumber + 1;

    return (
      <div
        className={sprinkles({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginY: "size-4",
        })}
      >
        <div
          className={sprinkles({
            background: "white",
            borderRadius: "size-1",
            transition: "easing",
          })}
        >
          {currentPageNumber !== 1 && (
            <Link href={`/articles/page/${prevPage}`}>
              <a
                data-testid="previous"
                className={sprinkles({
                  color: "black",
                  fontSize: "2xl",
                })}
              >
                前のページ
              </a>
            </Link>
          )}
        </div>
        <div>
          {currentPageNumber !== maxPageNumber && (
            <Link href={`/articles/page/${nextPage}`}>
              <a
                data-testid="next"
                className={sprinkles({
                  color: "black",
                  fontSize: "2xl",
                })}
              >
                次のページ
              </a>
            </Link>
          )}
        </div>
      </div>
    );
  }
);
