import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
console.log("DEVELOPMENT MODE: ", isDev);

const filename = (ext: string) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = [
  new HTMLWebpackPlugin({
    template: "../public/index.html",
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: filename("css"),
  }),
];

if (isProd) {
  plugins.push(new BundleAnalyzerPlugin());
}

const webpack = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.tsx"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: isProd,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    port: 4200,
    hot: isDev,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  devtool: isDev ? "source-map" : false,
  plugins,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              [
                "@babel/preset-typescript",
                { isTSX: true, allExtensions: true },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.png$/,
        use: ["file-loader"],
      },
    ],
  },
};

export default webpack;
