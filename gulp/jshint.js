var gulp = require('gulp');
var args = require('yargs').argv;
var log = require('./log');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({lazy: true}); 

/*
If --verbose print out all files
 */
gulp.task('jshint', function () {
  log('Analyzing jshint process...');
  return gulp
    .src(config.js)
    .pipe($.if(args.verbose, $.print()))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe($.jshint.reporter('fail'));
});