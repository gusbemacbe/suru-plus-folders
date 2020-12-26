const imagemin = require('gulp-imagemin');
const gulp = require('gulp');

gulp.task('default', () => 
{
  gulp.src('./../public_html/assets/imagens/eventos/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./../public_html/assets/imagens/eventos/'))
});