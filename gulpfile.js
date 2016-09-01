'use strict';
var gulp = require('gulp');
var Sass = require('gulp-sass');
var browserSync = require("browser-sync");
gulp.task("default", function(){
	browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./*/*.css").on("change", browserSync.reload);
  gulp.watch("./*/*.js").on("change", browserSync.reload);
  gulp.watch('./sass/*/*.scss', ['sass']);
})

gulp.task("browser-sync", function(){
  browserSync.init({
  server: {
   baseDir: "./"
  }
 });
 gulp.watch("./*.html").on("change", browserSync.reload);
 gulp.watch("./*/*.css").on("change", browserSync.reload);
 gulp.watch("./*/*.js").on("change", browserSync.reload);
});
gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
	.pipe(Sass().on('error', Sass.logError))
	.pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
