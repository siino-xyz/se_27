import { WithoutFV } from "@layouts";
import { ThanksContent } from "@components";

export const Thanks = () => {
  return <ThanksContent />;
};

export default Thanks;

Thanks.getLayout = function getLayout(thanks) {
  return <WithoutFV>{thanks}</WithoutFV>;
};
