import webpack from 'webpack'

export function buildResolves(): webpack.ResolveOptions {


  return {
    // чтобы лишний раз не прописывать расширение ипортов/экспортов добавим их
    extensions: [".tsx", ".ts", ".js"],
  }
}