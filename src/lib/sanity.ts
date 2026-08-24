import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Points at the existing cobalto-sanity Studio project (see
 * cobalto-sanity/sanity.config.ts — projectId ms1siuvr, dataset production).
 * The dataset has no real documents in it yet, so every fetch below falls
 * back to the static content in ./site-data until someone populates the
 * Studio and this file is pointed at live queries.
 */
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ms1siuvr";
export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlForSanityImage(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
