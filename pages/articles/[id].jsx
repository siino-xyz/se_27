import { client } from "../../libs/client"
import Image from 'next/image'
import styles from '../../styles/pages/articles/articles.module.scss'


export default function ArticlesId({ articles ,categories}) {
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
  const categoryData = await client.get({ endpoint: 'categories'});
  

  return {
    props: {
      articles: data,
      categories: categoryData.contents,
    },
  }

}