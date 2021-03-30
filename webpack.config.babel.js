import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
// import TerserPlugin from 'terser-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import path from 'path';

const env = process.env.NODE_ENV;
const isProd = env === 'production';

const srcPath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

const loadPlugins = () => {
  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: env === 'development',
  };

  const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    }),
    new webpack.NamedModulesPlugin(),
  ];

  // mode: 'production',
  //   optimization: {
  //   minimizer: [new TerserPlugin({ /* additional options here */ })],
  // },

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      // new TerserPlugin({}),
      // new webpack.optimize.UglifyJsPlugin({}),
      new MinifyPlugin(
        {},
        {
          test: /\.(js|jsx)$/,
          include: srcPath,
        },
      ),
    );
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  plugins.push(new ExtractTextPlugin('[name].bundle-[chunkhash].css'));

  plugins.push(new CopyWebpackPlugin([{ from: 'src/assets', to: 'images' }]));

  return plugins;
};

const getAppEntryPoints = () => {
  const entry = ['whatwg-fetch', path.join(__dirname, 'src', 'index.jsx')];

  if (!isProd) {
    entry.unshift('react-hot-loader/patch');
  }

  entry.unshift('babel-polyfill');

  return entry;
};

const config = {
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  entry: getAppEntryPoints(),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.jsx', 'css'],
  },
  output: {
    path: distPath,
    filename: isProd ? 'bundle-[chunkhash].js' : 'bundle.js',
    publicPath: '/',
  },
  plugins: loadPlugins(),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loaders: ['eslint-loader'],
        include: srcPath,
      },
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './postcss.config.js',
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 3000,
    compress: isProd,
    inline: !isProd,
    overlay: true,
    hot: !isProd,
    stats: {
      assets: true,
      timings: true,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};

export default config;
