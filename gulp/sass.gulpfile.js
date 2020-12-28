'use strict';
 
var csscomb = require('gulp-csscomb');
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () 
{
  return gulp.src('./../static/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./../static/assets/css/'));
});

gulp.task('csscomb', function() 
{
  return gulp.src('./../static/assets/css/schemes.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./../static/assets/css/'));
});

gulp.task('sass-csscomb', gulp.parallel('sass', 'csscomb')); 