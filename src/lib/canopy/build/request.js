import axios from "axios";
import { chunks } from "./chunks.js";
import { getPresentation3 } from "../iiif/context.js";
import { getManifestThumbnail } from "./thumbnail.js";
import { logResponse } from "./log.js";

export const getRootCollection = (id) =>
  axios.get(id).then((response) => getPresentation3(response.data));

export const getBulkManifests = async (items, chunkSize) =>
  await chunks(
    items,
    async (item) =>
      axios
        .get(item.id)
        .then(async (response) => {
          const manifest = getPresentation3(response.data);
          const thumbnail = await getManifestThumbnail(manifest);

          logResponse(item.id, response);
          return { ...manifest, index: item.index, thumbnail };
        })
        .catch((error) => {
          if (error.response) logResponse(item.id, error.response, false);
        }),
    chunkSize
  );
