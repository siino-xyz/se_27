import { siteConfig } from "site.config";
import { client } from "./client";
import { IArticles, ICategories } from "@types";

const limit = parseInt(siteConfig.defaultLimit);

export const getContents = async (): Promise<{
  articles: IArticles[];
  categories: ICategories[];
}> => {
  const [articles, categories] = await Promise.all([
    getArticles(limit),
    getCategories(),
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
