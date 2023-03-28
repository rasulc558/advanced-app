import { BuildOptions } from './types/config';
// import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins ({ isDev, paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html // шаблон файла куда будем подключать бандл
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // Позволит прокидывать глобальные переменные в само приложение
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    // Позволит в режиме dev применять изменения без обновления страницы
    new webpack.HotModuleReplacementPlugin()
  ]

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin())
  return plugins
}
