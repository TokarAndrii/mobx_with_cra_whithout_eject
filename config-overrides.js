const {
  override,
  addDecoratorsLegacy,
  disableEsLint
  //addExternalBabelPlugins
} = require("customize-cra");

module.exports = {
  webpack: override(
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint()
    //...addExternalBabelPlugins("@babel/plugin-proposal-decorators")
  )
};
