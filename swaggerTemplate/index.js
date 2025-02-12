const { generateApi } = require("swagger-typescript-api");
// import { generateApi } from "swagger-typescript-api";
const path = require("path");

generateApi({
  input: path.resolve(process.cwd(), "./assets/swagger.json"),
  output: path.resolve(process.cwd(), "./src"),
  // url: "http://XXXXXXXX/api-docs",
  httpClientType: false,
  modular: true,
  templates: path.resolve(process.cwd(), "./src/swaggerTemplate"),
  hooks: {
    onCreateRoute: (routeData) => {
      // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@', routeData);
      //增加接口请求前缀
      routeData.request.path = `/api${routeData.request.path}`;
    },
    onFormatRouteName: (routeInfo, templateRouteName) => {
      //自定义路由名称
      return templateRouteName.replace(/Using\w*/, "").replace(/[{}]/, "");
    },
  },
});
