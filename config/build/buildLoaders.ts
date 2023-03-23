import { BuildOptions } from './types/config';
import  webpack  from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(options:BuildOptions): webpack.RuleSetRule[]   {


  // Если не используем typescript то необходимо установить babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  // Этот лоудер настроен на scss/sass , файлы css обрабатывать не будет
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // MiniCss - выносит файлы стилей в отдельную папку
      options.isDev ? "style-loader": MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
          // Говорим чтобы обрабатывались файлы css с определенным названием
          auto: (resPath: string)=>Boolean(resPath.includes('.module.')),
          // Говорим чтобы в дев сборке были обычные название селекторов css
          localIdentName: options.isDev 
          ? '[path][name]__[local]--[hash:base64:5]' 
          : '[hash:base64:8]'
          },
          
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    typeScriptLoader, sassLoader
  ]
}