const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src([
    './dist/TestingWebComponent/runtime.js',
    './dist/TestingWebComponent/polyfills.js',
    './dist/TestingWebComponent/scripts.js',
    './dist/TestingWebComponent/main.js',
  ])
    .pipe(concat('app-greeter.js', { newLine: ';' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['concat']);