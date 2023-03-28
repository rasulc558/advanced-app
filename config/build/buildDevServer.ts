import { BuildOptions } from './types/config';
import type { Configuration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    // чтобы проксировать через основную страницу ( иначе дает ошибку 'cannot get ...')
    historyApiFallback: true,
    // Позволит испольозать Hot module replacement
    hot: true
  }
}
