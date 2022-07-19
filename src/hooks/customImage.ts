import base64url from "base64url";

const customImage = (baseImageUrl: string, title: string) => {
  const ogImageUrl = `${baseImageUrl}?w=1200&h=630&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=48&w=1050&txt-color=EDEDED&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title
    )}`
  )}&blend-mode=normal&blend-x=middle&blend-y=middle&fit=crop&usm=20`;

  return { ogImageUrl };
};

export default customImage;
