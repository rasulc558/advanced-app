import { BuildOptions } from './types/config';
import webpack from 'webpack'

export function buildResolves (options: BuildOptions): webpack.ResolveOptions {
  return {
    // чтобы лишний раз не прописывать расширение ипортов/экспортов добавим их
    extensions: ['.tsx', '.ts', '.js'],

    // В typescrip были настроены абсолютыне импорты, поэтому в вебпаке тоже их включаем
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], // Говорим что в каждой папке главный файл это
    alias: {}

  }
}
