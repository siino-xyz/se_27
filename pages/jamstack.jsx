import UnderpageLayout from "../layouts/UnderpageOuter";
import InnerLayout from "../layouts/GlobalInner";
import JamstackContent from "../sections/jamstackContent";
const JamstackDetail = () => {
  return (
    <>
      <JamstackContent />
    </>
  );
};

export default JamstackDetail;

JamstackDetail.getLayout = function getLayout(jamstackdetail) {
  return (
    <UnderpageLayout>
      <InnerLayout>{jamstackdetail}</InnerLayout>
    </UnderpageLayout>
  );
};
