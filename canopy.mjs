import 'dotenv/config';
import * as buildConfig from "./src/lib/canopy/build/config.js";
import * as aggregate from "./src/lib/canopy/build/aggregate.js";

const args = process.argv;

const main = () => {
  const path = args
    .find((value) => value.includes("--path="))
    ?.split("=")
    ?.pop();

  const isDev = args.includes("dev");
  const config = buildConfig.getConfig(path, isDev);

  const url = isDev ? `http://localhost:5001` : process.env.NEXT_PUBLIC_URL;
  const basePath = isDev ? `` : process.env.NEXT_PUBLIC_BASE_PATH;
  const baseUrl = basePath ? `${url}${basePath}` : url;
  const assetPrefix = basePath;

  const env = {
    CANOPY_CONFIG: {
      ...config,
      url,
      assetPrefix,
      basePath,
      baseUrl,
    },
  };

  aggregate.build(env.CANOPY_CONFIG);
};

main();