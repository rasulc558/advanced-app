import  webpack  from 'webpack';
// import path from 'path';
import { buildPlugins } from './buildPlagins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options:BuildOptions): webpack.Configuration {

  const {mode, paths, isDev} = options

  return {
    mode: mode, // Если 'production' будет меньше мусорного кода
    entry: paths.entry, // Можно через объект с рандомным ключом, который потом приментися к [name]
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // удаляем старые файлы перед билдом
    },

    // Чтобы показывал в каком конкретно файле произошла ошибка (инчае будет показывать на бандл целиком)
    devtool: isDev? 'inline-source-map': undefined,

    // Девсервер со стандартным портом 3000
    devServer: isDev? buildDevServer(options): undefined,
  
    // Ниже настройки TypeScript >>
    module: {
      // Тут указываем какие лоудеры и какие файлы(расширение файлов) обрабатывают и что исключают
      rules: buildLoaders(options)
    },
    resolve: buildResolves(options),
    // подключаемые плагины, почти все нужно ставить через npm
    plugins: buildPlugins(options)
  };
}