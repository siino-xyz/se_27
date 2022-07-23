import {
  MicroCMSListContent,
  MicroCMSQueries,
  MicroCMSListResponse,
} from "microcms-js-sdk";

export type Queries = MicroCMSQueries;

export interface IArticles extends MicroCMSListContent {
  title: string;
  body: string;
  eye_catch?: MicroCMS_EyeCatch;
  date: string;
  ogp_image?: MicroCMS_OGPImage;
  categories?: ICategories;
  description: string;
}

export type MicroCMS_EyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type MicroCMS_OGPImage = {
  url?: string | null;
  height?: number | null;
  width?: number | null;
  title?: string | null;
};

export interface ICategories extends MicroCMSListContent {
  name: string;
}

export type MicroCMSResponse<T> = MicroCMSListResponse<T>;
