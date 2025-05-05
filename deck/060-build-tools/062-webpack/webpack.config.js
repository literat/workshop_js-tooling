const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    utilities: path.resolve(__dirname, 'src/utilities.js')
  },
  output: {
    path: path.resolve(__dirname, 'build')
  }
}
