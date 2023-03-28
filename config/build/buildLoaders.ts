import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  // Если не используем typescript то необходимо установить babel-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  // Этот лоудер настроен на scss/sass , файлы css обрабатывать не будет
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // MiniCss - выносит файлы стилей в отдельную папку
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader",
      {
        loader: 'css-loader',
        options: {
          modules: {
            // Говорим чтобы обрабатывались файлы css с определенным названием
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // Говорим чтобы в дев сборке были обычные название селекторов css
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  };

  const svgLoader = {
    test: /\.svg$/i,
    // те файлы которые будут запрашивать
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  /*
  const babelLoader2 = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "fr"],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: "public/locales/{{locale}}/{{ns}}.json",
            },
          ],
        ],
      },
    },
  };

  */

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };

  return [babelLoader, typeScriptLoader, sassLoader, svgLoader, fileLoader];
}
