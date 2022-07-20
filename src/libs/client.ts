import { createClient } from "microcms-js-sdk";
import { siteConfig } from "site.config";

export const client = createClient({
  serviceDomain: siteConfig.serviceDomain,
  apiKey: siteConfig.apiKey,
});
