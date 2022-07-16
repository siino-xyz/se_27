import Meta from "../layouts/Meta";
import WithoutFV from "../layouts/WithoutFV";
import ContactForm from "../templates/contactForm/ContactForm";

const ContactPage = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

ContactPage.getLayout = function getLayout(contactform) {
  return (
    <Meta>
      <WithoutFV>{contactform}</WithoutFV>
    </Meta>
  );
};

export default ContactForm;
