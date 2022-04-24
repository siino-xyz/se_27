import NextOgp from "../components/NextOgp";
import CustomImage from "../components/CustomImage";
export function ArticleHeader({ articles, children }) {
  const { ogImageUrl } = CustomImage(articles?.ogp_image?.url, articles.title);

  return (
    <>
      <NextOgp
        pagetitle={articles.title}
        pagedescription={articles.title}
        pagepath="articles"
        postimg={ogImageUrl}
      />
      <div>{children}</div>
    </>
  );
}

export default ArticleHeader;
