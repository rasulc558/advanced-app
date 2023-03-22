import { BuildOptions } from './types/config';
// import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' 

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html, //шаблон файла куда будем подключать бандл
    }),
    new webpack.ProgressPlugin(),
  ]
}