import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import config from "../config/client-config";

const builder = createImageUrlBuilder(config);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
