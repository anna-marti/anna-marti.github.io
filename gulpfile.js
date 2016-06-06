'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', serve('.'));

gulp.task('default', ['serve', 'sass:watch']);
gulp.task('build', ['sass']);
