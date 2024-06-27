const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/Widget.jsx', // Ensure this points to Widget.jsx
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'widget.js',
    library: 'Widget',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
