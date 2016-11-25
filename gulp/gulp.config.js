module.exports = function () {
  var rootPath = './app/';
  var src = 'src/';
  var dev = 'dev/';
  

  var config = {

    rootPath: rootPath,
    src: src,
    dev: dev,
    html: rootPath + '**/*.html',
    js: rootPath + '**/*.js',
    css: rootPath + dev + '**/*.css',
    scss: rootPath + src + '**/*.scss',

  };

  return config;

};