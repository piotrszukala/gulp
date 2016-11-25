var gulp = require('gulp');
var log = require('./log');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del'); 


gulp.task('clean-styles', function () {
  clean(config.css);
});

//////////////////////////

function clean(path) {

  log('Cleaning files.... ' + $.util.colors.blue(path));
  del(path).then(log('Cleaning done'));
}