import Meta from "../layouts/Meta";
import WithoutFV from "@layouts/WithoutFV";
import ThanksContent from "@templates/thanksPage/thanksContent";

export const Thanks = () => {
  return (
    <>
      <ThanksContent />
    </>
  );
};

export default Thanks;

Thanks.getLayout = function getLayout(thanks) {
  return (
    <Meta>
      <WithoutFV>{thanks}</WithoutFV>;
    </Meta>
  );
};
