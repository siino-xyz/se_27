import { customImage } from "@hooks";
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type SeoProps = {
  ogpurl?: string | null;
  ogptitle?: string | null;
  pagetitle?: string;
  pagedescription?: string;
  pageimg?: string;
  postimg?: string;
  pageimgw?: string;
  pageimgh?: string;
  keyword?: string;
};

export const Seo = ({
  ogpurl,
  ogptitle,
  pagetitle,
  pagedescription,
  pageimg,
  pageimgh,
  pageimgw,
  keyword,
}: SeoProps) => {
  const { ogImageUrl } = customImage(ogpurl, ogptitle);
  const router = useRouter();
  const pagePath = router.pathname;

  const title = pagetitle
    ? `${pagetitle} | ${process.env.NEXT_PUBLIC_TITLE}`
    : `${process.env.NEXT_PUBLIC_TITLE}`;

  const description =
    pagedescription || `${process.env.NEXT_PUBLIC_DESCRIPTION}`;

  const url = pagePath
    ? `${process.env.NEXT_PUBLIC_URL}${pagePath}`
    : `${process.env.NEXT_PUBLIC_URL}`;

  const imgurl = pageimg
    ? `${process.env.NEXT_PUBLIC_URL}${pageimg}`
    : ogImageUrl || `${process.env.NEXT_PUBLIC_URL}defaultogp.svg`;

  const imgw = pageimgw || "1200px";

  const imgh = pageimgh || "630px";

  return (
    <Head>
      <link rel="canonical" href={url} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword || title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgw} />
      <meta property="og:image:height" content={imgh} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={imgurl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgurl} />
    </Head>
  );
};
