var gulp = require('gulp');
var log = require('./log');
var config = require('./gulp.config')();
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true}); 

gulp.task('styles', ['clean-styles'], function (done) {
  log('Converting sass to css...');
  var flag = args.min;


  return gulp
    .src(config.scss) // {base: config.rootPath} if compile to the same directory
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($.if(flag, $.cssmin()))
    .pipe(gulp.dest(config.rootPath + config.dev));
});

gulp.task('sass-watch', ['styles'], function () {
  gulp.watch([config.scss], ['styles']);
});

