var fs = require('fs');
var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.js$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


gulp.task('help', taskListing);
gulp.task('default', ['help']);