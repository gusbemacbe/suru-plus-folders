const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = 
{
  devServer: 
  {
    // open: 
    // {
    //   app: ['firefox', '--new-tab', 'gusbemacbe.pt:1989']
    // },
    open: "falkon",
    watchContentBase: true,
    // publicPath: '/assets',
    public: 'http://localhost:1989',
  },
  entry: 
  [
    "./static/assets/scss/schemes.scss"
  ],
  output: 
  {
    path: path.resolve('static', 'assets', 'css'),
  },
  module: 
  {
    rules: 
    [
      {
        test: /\.css$/,
        use: 
        [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: 
        [
          {
            loader: 'file-loader',
            options: 
            {
              name: '[name].css'
            }
           },
           {
             loader: 'extract-loader'
           },
           {
             loader: 'css-loader?-url'
           },
           {
             loader: 'postcss-loader'
           },
           {
             loader: 'sass-loader'
           }
         ],
         include: [path.resolve(__dirname, 'static/assets/scss')],
      },
    ],
  },
  plugins: 
  [
    new MiniCssExtractPlugin(),
  ],
};