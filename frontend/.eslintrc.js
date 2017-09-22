var path = require('path');

module.exports = {
  parser: "babel-eslint",
  extends: ["minerva"],
  env: {
    "browser": true,
    "jest": true
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js'),
      }
    }
  }
}