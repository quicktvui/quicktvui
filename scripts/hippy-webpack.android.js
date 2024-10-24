const path = require('path');
const fs = require('fs');
const HippyDynamicImportPlugin = require('@hippy/hippy-dynamic-import-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
//混淆 TODO
// const WebpackObfuscator = require('webpack-obfuscator');
const platform = 'android';
const pkg = require('../package.json');
const manifest = require('../dist/android/vendor-manifest.json');
let cssLoader = '@hippy/vue-css-loader';
const hippyVueCssLoaderPath = path.resolve(__dirname, '../../../packages/hippy-vue-css-loader/dist/css-loader.js');
if (fs.existsSync(hippyVueCssLoaderPath)) {
  console.warn(`* Using the @hippy/vue-css-loader in ${hippyVueCssLoaderPath}`);
  cssLoader = hippyVueCssLoaderPath;
} else {
  console.warn('* Using the @hippy/vue-css-loader defined in package.json');
}

module.exports = {
  mode: 'production',
  bail: true,
  entry: {
    index: [path.resolve(pkg.nativeMain)],
  },
  output: {
    filename: `[name].${platform}.js`,
    path: path.resolve(`./dist/${platform}/`),
    strictModuleExceptionHandling: true,
    globalObject: '(0, eval)("this")',
    assetModuleFilename: '[hash][ext][query]'
    // CDN path can be configured to load children bundles from remote server
    // publicPath: 'https://xxx/hippy/hippyVueNextDemo/',
  },
  optimization: {
    moduleIds: 'named',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        //混淆 TODO
        // parallel: true,
        // terserOptions: {
        //   mangle: true,
        //   output: {
        //     // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
        //     beautify: false,
        //     // 是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
        //     comments: false
        //   },
        //   compress: {
        //     warnings: false,
        //     drop_debugger: true,
        //     drop_console: true,
        //     pure_funcs: ['console.log']
        //   },
        // },
        extractComments: false
      })
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __PLATFORM__: JSON.stringify(platform),
      __DEV__: false,
      __TEST__: false,
      __FEATURE_PROD_DEVTOOLS__: false,
      __BROWSER__: false,
      'process.env': '{}',
    }),
    new CaseSensitivePathsPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, '..'),
      manifest,
    }),
    new HippyDynamicImportPlugin(),
    // LimitChunkCountPlugin can control dynamic import ability
    // Using 1 will prevent any additional chunks from being added
    // new webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 1,
    // }),
    // use SourceMapDevToolPlugin can generate sourcemap file
    // new webpack.SourceMapDevToolPlugin({
    //   test: /\.(js|jsbundle|css|bundle)($|\?)/i,
    //   filename: '[file].map',
    // }),

    //混淆 TODO
    // new WebpackObfuscator ({
    //   rotateStringArray: true
    // }, [''])
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                // disable vue3 dom patch flag，because hippy do not support innerHTML
                hoistStatic: false,
                // whitespace handler, default is 'condense', it can be set 'preserve'
                whitespace: 'condense',
              },
            },
          },
        ],
      },
      {
        test: /\.(le|c)ss$/,
        use: [cssLoader, 'less-loader'],
      },
      {
        test: /\.t|js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceType: 'unambiguous',
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: 57,
                    },
                  },
                ],
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties'],
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-transform-runtime', {regenerator: true}],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|json)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: 'assets/',
          publicPath: 'assets/',
        }
        // use: [{
        //   loader: 'file-loader',
        //   options: {
        //     // if you would like to use base64 for picture, uncomment limit: true
        //     // limit: true,
        //     // limit: 8192,
        //     fallback: 'file-loader',
        //     name: '[name].[ext]',
        //     outputPath: 'assets/',
        //     publicPath: 'assets',
        //   },
        // }],
      },
      {
        test: /\.(ts)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    // modules: [path.resolve(__dirname, '../node_modules')],
    // alias: (() => {
    //   const aliases = {
    //     src: path.resolve('./src'),
    //   };
    //
    //   //@vue/runtime-core
    //   // const hippyVueRuntimeCorePath = path.resolve(__dirname, '../node_modules/@vue/runtime-core');
    //   // if (fs.existsSync(path.resolve(hippyVueRuntimeCorePath, 'index.ts'))) {
    //   //   console.warn(`* Using the @vue/runtime-core in ${hippyVueRuntimeCorePath} as vue alias`);
    //   //   aliases['@vue/runtime-core'] = hippyVueRuntimeCorePath;
    //   // } else {
    //   //   console.warn('* Using the @vue/runtime-core defined in package.json');
    //   // }
    //
    //   // //@extscreen/es3-vue
    //   // const hippyVueNextPath = path.resolve(__dirname, '../node_modules/@extscreen/es3-vue');
    //   // if (fs.existsSync(path.resolve(hippyVueNextPath, 'index.ts'))) {
    //   //   console.warn(`* Using the @extscreen/es3-vue in ${hippyVueNextPath} as @extscreen/es3-vue alias`);
    //   //   aliases['@extscreen/es3-vue'] = hippyVueNextPath;
    //   // } else {
    //   //   console.warn('* Using the @extscreen/es3-vue defined in package.json');
    //   // }
    //
    //   //
    //   // const componentPath = path.resolve(__dirname, '../node_modules/@extscreen/es3-component');
    //   // if (fs.existsSync(path.resolve(componentPath, 'index.ts'))) {
    //   //   console.warn(`* Using the @extscreen/es3-component in ${componentPath} as @extscreen/es3-component alias`);
    //   //   aliases['@extscreen/es3-component'] = componentPath;
    //   // } else {
    //   //   console.warn('* Using the @extscreen/es3-component defined in package.json');
    //   // }
    //   //
    //   // const routerPath = path.resolve(__dirname, '../node_modules/@extscreen/es3-router');
    //   // if (fs.existsSync(path.resolve(routerPath, 'index.ts'))) {
    //   //   console.warn(`* Using the @extscreen/es3-router in ${routerPath} as @extscreen/es3-router alias`);
    //   //   aliases['@extscreen/es3-router'] = routerPath;
    //   // } else {
    //   //   console.warn('* Using the @extscreen/es3-router defined in package.json');
    //   // }
    //   //
    //   // const styleParserPath = path.resolve(__dirname, '../node_modules/@extscreen/es3-vue-style-parser');
    //   // if (fs.existsSync(path.resolve(styleParserPath, 'index.ts'))) {
    //   //   console.warn(`* Using the @extscreen/es3-vue-style-parser in ${styleParserPath} as @extscreen/es3-vue-style-parser alias`);
    //   //   aliases['@extscreen/es3-vue-style-parser'] = styleParserPath;
    //   // } else {
    //   //   console.warn('* Using the @extscreen/es3-vue-style-parser defined in package.json');
    //   // }
    //
    //   return aliases;
    // })(),
  },
};
