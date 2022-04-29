import UnderpageLayout from "../layouts/UnderpageOuter";
import InnerLayout from "../layouts/GlobalInner";
//staticSections
import JamstackDetail from "../staticSections/jamstack/JamstackDetail";
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
    <UnderpageLayout>
      <InnerLayout>{jamstack}</InnerLayout>
    </UnderpageLayout>
  );
};
