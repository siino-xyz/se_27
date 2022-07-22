import { WithoutFV } from "@layouts";
import type { NextPageWithLayout } from "next";
import { ThankPageContent } from "@components";
import * as React from "react";

const Thanks: NextPageWithLayout = React.memo(function thanksMemo() {
  return <ThankPageContent />;
});

export default Thanks;

Thanks.getLayout = function getLayout(thanks: React.ReactElement) {
  return <WithoutFV>{thanks}</WithoutFV>;
};
