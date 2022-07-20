import { WithoutFV } from "@/layouts";
import { ContactForm } from "@components";

const ContactPage = () => {
  return <ContactForm />;
};

ContactPage.getLayout = function getLayout(contactform) {
  return <WithoutFV>{contactform}</WithoutFV>;
};

export default ContactForm;
