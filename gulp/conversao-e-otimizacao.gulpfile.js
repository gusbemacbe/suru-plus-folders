const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');

gulp.task('converter', function () 
{
  return gulp.src('./../tests/images/*.png')
    .pipe(imageResize({ format : 'jpeg' }))
    .pipe(gulp.dest('./../tests/images/'));
});

gulp.task('otimizar', () => 
{
  gulp.src('./../tests/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./../tests/images/'))
});

gulp.task('teste', function () 
{
  return gulp.src('./../tests/images/*.png')
    .pipe(imageResize({ format : 'jpeg' }))
    .pipe(imagemin())
    .pipe(gulp.dest('./../tests/images/'));
});

gulp.task('tudo', gulp.parallel('converter', 'otimizar')); 