import { BuildOptions } from './types/config';
// import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' 
import  MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html, //шаблон файла куда будем подключать бандл
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}