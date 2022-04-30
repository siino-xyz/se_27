import { useRouter } from "next/router";

export const HeaderLogoChanger = () => {
  const router = useRouter();
  const path = router.asPath;
  const isBlogPage = /blog/.test(path);
  return { path, isBlogPage };
};

export default HeaderLogoChanger;
