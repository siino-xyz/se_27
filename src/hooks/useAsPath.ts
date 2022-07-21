import { useRouter } from "next/router";

export const useAsPath = () => {
  const router = useRouter();
  const path = router.asPath;
  return { path };
};
