import { createThumbnailHelper } from "@iiif/vault-helpers";

export const getRepresentativeImage = async (canvas, preferredSize = 1200) => {
  const helper = createThumbnailHelper();
  try {
    return await helper.getBestThumbnailAtSize(canvas, {
      width: preferredSize,
      height: preferredSize,
    });
  } catch (error) {
    console.log(error);
    return {};
  }
};
