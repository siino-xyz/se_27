import { MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk";

export type Queries = MicroCMSQueries;

/* 
MicroCMSListContentは、MicroCMSが標準で用意しているAPIスキーマの型定義ファイル
（publishedAtなど）
*/
export interface IArticles extends MicroCMSListContent {
  title: string;
  body: string;
  eye_catch?: MicroCMS_EyeCatch;
  date: string;
  ogp_image: MicroCMS_OGPImage;
  categories?: ICategories;
}

export type MicroCMS_EyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type MicroCMS_OGPImage = {
  url: string;
  height: number;
  width: number;
};

export interface ICategories extends MicroCMSListContent {
  name: string;
}

/*ここから下 リファクタが終わり次第削除 

































*/

export interface BlogContentTypes {
  id: string;
  title: string;
  body: string;
  microCMSImage: PostImageType;
  date: DateType;
  category: CategoryTypes;
}

export interface ArticleCardTypes {
  title: string;
  id: string;
  microCMSImage: PostImageType;
  date: DateType;
  category: CategoryTypes;
}

export interface CategoryTypes {
  name?: string;
  id?: string;
}

export interface DateType {
  publishedAt: string;
}

export interface PostImageType {
  url: string;
}

export interface Articles {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  body: string;
  categories: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    categories: string;
  };
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  ogp_image: {
    url: string;
    height: number;
    width: number;
  };
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  categories: string;
}
