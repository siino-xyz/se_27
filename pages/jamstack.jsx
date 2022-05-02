import Meta from "../layouts/Meta";
import UnderpageLayout from "../layouts/UnderpageOuter";
import InnerLayout from "../layouts/GlobalInner";
//staticSections
import JamstackDetail from "../staticSections/JamstackDetail";
const Jamstack = () => {
  return (
    <>
      <JamstackDetail />
    </>
  );
};

export default Jamstack;

Jamstack.getLayout = function getLayout(jamstack) {
  return (
    <Meta>
      <UnderpageLayout>
        <InnerLayout>{jamstack}</InnerLayout>
      </UnderpageLayout>
    </Meta>
  );
};
