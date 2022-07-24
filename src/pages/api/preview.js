import fetch from "node-fetch";

const previewFunc = async (req, res) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }

  const articles = await fetch(
    `https://kp822wg687.microcms.io/api/v1/blog/articles/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "" } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!articles) {
    return res.status(401).json({ message: "INVAILID SLUG" });
  }

  res.setPreviewData({
    slug: articles.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/blog/articles/${articles.id}` });
  res.end("Preview mode enabled");
};
export default previewFunc;
