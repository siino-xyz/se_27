import Meta from "../layouts/Meta";
import WithoutFV from "@layouts/WithoutFV";
import JamstackDetail from "../templates/jamstackDetail/JamstackDetail";
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
      <WithoutFV>{jamstack}</WithoutFV>
    </Meta>
  );
};
