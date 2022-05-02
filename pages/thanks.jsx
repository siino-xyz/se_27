import Meta from "../layouts/Meta";
import Thankspage from "../layouts/Thankspage";
import ThanksContent from "../staticSections/thanksContent";
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
      <Thankspage>{thanks}</Thankspage>;
    </Meta>
  );
};
