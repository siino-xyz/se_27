import UnderpageLayout from "../layouts/UnderpageLayout";
import InnerLayout from "../layouts/InnerLayout";
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
