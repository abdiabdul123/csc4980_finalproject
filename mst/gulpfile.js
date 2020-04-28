var gulp = require('gulp');
var open = require('gulp-open');
var browserSync = require('browser-sync').create();



gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        proxy: "http://localhost:8080"
    });
});
