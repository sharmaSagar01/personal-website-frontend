import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  apiVersion: "2023-04-06",
  useCdn: process.env.NODE_ENV === "production",
});

export const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source);
};
