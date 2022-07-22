import { WithoutFV } from "@/layouts";
import { ContactForm } from "@components";
import * as React from "react";
import type { NextPageWithLayout } from "next";

const ContactPage: NextPageWithLayout = React.memo(function contactPageMemo() {
  return <ContactForm />;
});

ContactPage.getLayout = function getLayout(contactform: React.ReactElement) {
  return <WithoutFV>{contactform}</WithoutFV>;
};

export default ContactForm;
