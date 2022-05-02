import { useRouter } from "next/router";

const useAsPath = () => {
  const router = useRouter();
  const path = router.asPath;
  return { path };
};

export default useAsPath;
