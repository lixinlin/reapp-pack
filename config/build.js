var pack = require('..');

require('reapp-object-assign');

module.exports = function(opts) {
  return pack(Object.assign({
    entry: './app/app.js',
    devtool: 'source-map',
    target: 'web',
    platform: 'ios',
    env: 'production',
    debug: true,
    separateStylesheet: true
  }, opts));
}