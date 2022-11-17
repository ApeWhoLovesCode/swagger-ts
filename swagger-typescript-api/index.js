const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const outputDir = path.resolve(__dirname, "../src/s-t-api")

/** 
 * npx swagger-typescript-api -p ./assets/api.json -o ./src/s-t-api -n myApi.ts
 */

/* NOTE: all fields are optional expect one of `output`, `url`, `spec` */
generateApi({
  input: path.resolve(__dirname, "../assets/api.json"),
  // url: 'https://dev-api.lightwork.com.cn/api-doc/#/',
  output: outputDir,
  // modular: true,
  templates: path.resolve(__dirname, './templates/api.eta'),
  // axios: false,
  // routeTypes: true,
});