import { HeadType } from "@types";

// type metaProps = {
//   metas: HeadType;
// }

export const metaConditions = ({ props }: { props: HeadType }) => {
  const title = props.pagetitle
    ? `${props.pagetitle} | ${process.env.NEXT_PUBLIC_TITLE}`
    : `${process.env.NEXT_PUBLIC_TITLE}`;

  const description =
    props.pagedescription || `${process.env.NEXT_PUBLIC_DESCRIPTION}`;

  const url = props.pagepath
    ? `${process.env.NEXT_PUBLIC_URL}${props.pagepath}`
    : `${process.env.NEXT_PUBLIC_URL}`;

  const imgurl = props.pageimg
    ? `${process.env.NEXT_PUBLIC_URL}${props.pageimg}`
    : props.postimg || `${process.env.NEXT_PUBLIC_URL}defaultogp.svg`;

  const imgw = props.pageimgw || "1200px";

  const imgh = props.pageimgh || "630px";

  return { title, description, url, imgurl, imgw, imgh };
};
