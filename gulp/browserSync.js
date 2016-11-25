var gulp = require('gulp');
var config = require('./gulp.config')();
var browserSync = require('browser-sync').create();


  gulp.task('browser-sync', function() {
   
    var options = {
      server: {
        baseDir: config.rootPath
      },
      port: 3000,
      // watching these files
      watchOptions: {
        ignoreInitial: true,
        ignored: '*.txt'
      },
      files: [
        config.html,
        config.js,
        config.css
      ],
      // Allow to interact between few browsers.
      ghostMode: {
        clicks: true,
        location: false,
        forms: true,
        scroll: true
      },
      injectChanges: true,
      logFileChanges: true, // logging
      logLevel: 'info',
      logPrefix: 'gulp-browser-sync', // String prefix
      notify: true, // notify when end reloading
      reloadDeley: 0 // 1000
    };

    browserSync.init(options);
  });


