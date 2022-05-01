import { useRouter } from "next/router";

export const HeaderLogoChanger = () => {
  const router = useRouter();
  const path = router.asPath;
  const isBlogPage = /blog/.test(path);
  const isCategoryPage = /category/.test(path);
  return { path, isBlogPage, isCategoryPage };
};

export default HeaderLogoChanger;
