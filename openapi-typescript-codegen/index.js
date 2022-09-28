const OpenAPI = require('openapi-typescript-codegen');

OpenAPI.generate({
  input: './assets/api.json',
  // input: 'https://dev-api.lightwork.com.cn/api-doc-json',
  output: './src/o-t-codegen',

});

// Or by providing the content of the spec directly 🚀
// OpenAPI.generate({
//   input: require('./spec.json'),
//   output: './generated',
// });