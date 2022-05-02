import Meta from "../layouts/Meta";
import UnderpageLayout from "../layouts/UnderpageOuter";
import InnerLayout from "../layouts/GlobalInner";
import Contact from "../staticSections/Contact";
export default function ContactForm() {
  return (
    <>
      <Contact />
    </>
  );
}

ContactForm.getLayout = function getLayout(contactform) {
  return (
    <Meta>
      <UnderpageLayout>
        <InnerLayout>{contactform}</InnerLayout>
      </UnderpageLayout>
    </Meta>
  );
};
