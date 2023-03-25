import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");


export default (env: BuildEnv)=>{
  
const paths: BuildPath = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, 'src')
}

const mode = env.mode || 'development'
const isDev = mode === 'development'
const PORT = env.port || 3000

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths, 
  isDev,
  port: PORT
})

return config
}
