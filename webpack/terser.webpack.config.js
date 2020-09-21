const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = 
{
  entry: 
  [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/lazysizes/lazysizes.js",
    "./node_modules/instafeed/src/InstagramFeed.js",
    "./node_modules/slick-carousel/slick/slick.js",
    "./backup/assets/javascript/jssor-slider.js",
    "./backup/assets/javascript/eventos.js",
    "./backup/assets/javascript/patrocinadores.js",
    "./backup/assets/javascript/token.js",
    "./backup/assets/javascript/global.js",
  ],
  output: 
  {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  optimization: 
  {
    minimize: true,
    minimizer: 
    [
      new TerserPlugin(
      {
        terserOptions: 
        {
          compress: true,
          keep_classnames: true,
          keep_fnames: true
        }
      }),
    ],
  },
};