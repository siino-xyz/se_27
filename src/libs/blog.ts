import { siteConfig } from "site.config";
import { client } from "./client";
import { IArticles, ICategories, MicroCMSResponse, Queries } from "@types";

const limit = parseInt(siteConfig.defaultLimit);

export const getContents = async (
  currentPage: number = 1,
  articleFilter?: string
): Promise<{
  articles: IArticles[];
  categories: ICategories[];
}> => {
  const [{ articles }, categories] = await Promise.all([
    getArticlesByFilter(limit, currentPage, articleFilter),
    getCategories(),
    getArticles(limit),
  ]);
  return {
    articles: articles.contents,
    categories: categories.contents,
  };
};

export const getCategories = async () => {
  const res = await client.getList<ICategories>({
    endpoint: "categories",
  });
  return res;
};

export const getArticles = async (limit: number) => {
  const res = await client.getList<IArticles>({
    endpoint: "articles",
    queries: { limit: limit },
  });
  return res;
};

export const getNewestArticles = async (): Promise<{
  articles: IArticles[];
}> => {
  const articles = await client.getList<IArticles>({
    endpoint: "articles",
    queries: { limit: siteConfig.defaultMinLimit },
  });
  return {
    articles: articles.contents,
  };
};

export const getContentId = async (contentId: string) => {
  const res = await client.getListDetail<IArticles>({
    endpoint: "articles",
    contentId: contentId,
    queries: { depth: 2 },
  });
  return res;
};

export const getArticlesByFilter = async (
  limit: number,
  currentPage: number,
  articleFilter?: string
): Promise<{ articles: MicroCMSResponse<IArticles> }> => {
  const queries: Queries = {
    limit: limit,
    filters: articleFilter,
    offset: (currentPage - 1) * limit,
  };
  const articles = await client.getList<IArticles>({
    endpoint: "articles",
    queries: queries,
  });
  // const pager = [...Array(Math.ceil(articles.totalCount / 10)).keys()];
  return { articles };
};
