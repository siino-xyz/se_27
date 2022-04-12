import { client } from "../../libs/client"
import Image from 'next/image'


export default function ArticlesId({ articles }) {
  return (
    <>
      <div>
        <Image
          src={articles.eye_catch.url}
          width={944}
          height={531}
          layout='intrinsic'
          alt="eye_catch"
        />
      </div>
    </>
  )
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });
  

  return {
    props: {
      articles: data,
    },
  };
};