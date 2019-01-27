const resolve = require('path').resolve

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: ['~/../../lib/module'],
  maintenance: {
    enabled: true,
    path: '/maintenance'
  }
}
