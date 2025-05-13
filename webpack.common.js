const path = require('path');

module.exports = {
  entry: {
    app: './js/function.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/function.js',
  },
};
