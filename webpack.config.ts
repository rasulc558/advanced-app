import path from 'path';
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin' 

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

const config: webpack.Configuration = {
  mode: "development", // Если 'production' будет меньше мусорного кода
  entry: path.resolve(__dirname, "src", "index.ts"), // Можно через объект с рандомным ключом, который потом приментися к [name]
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // удаляем старые файлы перед билдом
  },

  // Ниже настройки TypeScript >>
  module: {
    // Тут указываем какие лоудеры и какие файлы(расширение файлов) обрабатывают и что исключают
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // чтобы лишний раз не прописывать расширение ипортов/экспортов добавим их
    extensions: [".tsx", ".ts", ".js"],
  },
  // подключаемые плагины, почти все нужно ставить через npm
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), //шаблон файла куда будем подключать бандл
    }),
    new webpack.ProgressPlugin(),
  ],
};

export default config
