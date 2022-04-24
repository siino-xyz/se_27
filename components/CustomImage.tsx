import base64url from "base64url";

const CustomImage = (baseImageUrl: string, title: string) => {
  const ogImageUrl = `${baseImageUrl}?w=640&h=400&blend64=${base64url(
    `https://assets.imgix.net/~text?txtsize=38&w=550&txt-color=EDEDED&txt-align=middle&txtfont=Hiragino%20Sans%20W6&txt-track=2&txt64=${base64url(
      title
    )}`
  )}&blend-mode=normal&blend-x=middle&blend-y=middle&fit=crop&usm=20`;

  return { ogImageUrl };
};

export default CustomImage;
