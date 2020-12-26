var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');

var indexCSSFiles = 
[
  "./../backup/assets/css/cores.css", 
  "./../backup/assets/css/fontes.css", 
  "./../backup/assets/css/icones.css", 
  "./../backup/assets/css/global.css",
  "./../backup/assets/css/carrossel.css",
  "./../backup/assets/css/index.css",
  "./../backup/assets/css/slick.css",
  "./../backup/assets/css/slick-theme.css",
  "./../backup/assets/css/movel.css"
],
contactoCSSFiles = 
[
  "./../backup/assets/css/cores.css", 
  "./../backup/assets/css/fontes.css", 
  "./../backup/assets/css/icones.css", 
  "./../backup/assets/css/global.css",
  "./../backup/assets/css/contacto.css",
  "./../backup/assets/css/movel.css"
],
orcamentoCSSFiles = 
[
  "./../backup/assets/css/cores.css", 
  "./../backup/assets/css/fontes.css", 
  "./../backup/assets/css/icones.css", 
  "./../backup/assets/css/global.css",
  "./../backup/assets/css/orcamento.css",
  "./../backup/assets/css/movel.css"
],
sobreCSSFiles = 
[
  "./../backup/assets/css/cores.css", 
  "./../backup/assets/css/fontes.css", 
  "./../backup/assets/css/icones.css", 
  "./../backup/assets/css/global.css",
  "./../backup/assets/css/sobre.css",
  "./../backup/assets/css/movel.css"
],
cssDest = './../public_html/assets/css';

gulp.task('index-minificando-css', () => {
  return gulp.src(indexCSSFiles)
        .pipe(concat('empacotado-index.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${cssDest}/`));
});

gulp.task('contacto-minificando-css', () => {
  return gulp.src(contactoCSSFiles)
        .pipe(concat('empacotado-contacto.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${cssDest}/`));
});

gulp.task('orcamento-minificando-css', () => {
  return gulp.src(orcamentoCSSFiles)
        .pipe(concat('empacotado-orcamento.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${cssDest}/`));
});

gulp.task('sobre-minificando-css', () => {
  return gulp.src(sobreCSSFiles)
        .pipe(concat('empacotado-sobre.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(`${cssDest}/`));
});

gulp.task('csses', gulp.parallel('index-minificando-css', 'contacto-minificando-css', 'orcamento-minificando-css', 'sobre-minificando-css')); 