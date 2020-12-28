const CracoAlias = require("craco-alias");

module.exports = {
   plugins: {
      alias: {
         plugins: CracoAlias,
         options: {
            source: "tsconfig",
            baseUrl: "./src",
            tsConfigPath: "./tsconfig.paths.json",
         },
      },
   },
};
