const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        resourceQuery: /inline/, // 仅处理带 ?inline 的
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // 处理 CSS 并注入到页面
      {
        test: /\.css$/i,
        resourceQuery: { not: [/inline/] }, // 不处理带?inline的
        use: ['style-loader', 'css-loader'],
      },
      // 处理非模块化的 JS（如 jquery/md5）为 sideEffects
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        sideEffects: true,
      },
    ],
  },
  plugins: [],
  externals: {
    // 可选：如果你想让 jQuery 在外部引入，而不是打包进去
    // 'jquery': '$'
  },
};
