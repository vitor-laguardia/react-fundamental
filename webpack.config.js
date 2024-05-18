//who executes this file is node. this is why we cant use modern js sintax
// entry: reactDOM.render
const path = require('path'); //identify the os that we are using and configure the apropriate path

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
};
