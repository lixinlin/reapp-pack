var pack = require('..');

require('reapp-object-assign');

module.exports = function(opts) {
  return pack(Object.assign({
    entry: './app/app.js',
    devtool: 'source-map',
    target: 'web',
    env: 'production',
    debug: true,
    separateStylesheet: true,
    cordova: {
      config: 'config.xml',
      src: 'index.html',
      platform: 'ios',
      version: true
    }
  }, opts));
}