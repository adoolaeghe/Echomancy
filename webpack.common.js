 const path = require('path');
 var webpack = require('webpack');
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   context: __dirname,
   module: {
     loaders: [
       {
         test: /\.js?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
           presets: ['react', 'es2015', 'stage-0'],
           plugins: ['react-html-attrs',
                     'transform-class-properties',
                     'transform-decorators-legacy',
                     "syntax-dynamic-import",
                     "transform-react-jsx"]
         }
       },
       {
         test: /\.sass$/,
         loader: 'style-loader!css-loader!sass-loader'
       },
       {
         test: /\.scss$/,
         loader: 'style-loader!css-loader!sass-loader'
       },
     ]
   },
   entry: {
     app: './src/js/client.js'
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production'
     }),
     new webpack.ProvidePlugin({noUiSlider: 'nouislider'}),
     new webpack.optimize.ModuleConcatenationPlugin(),
   ],

   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
 };
