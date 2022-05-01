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
  return <Thankspage>{thanks}</Thankspage>;
};
