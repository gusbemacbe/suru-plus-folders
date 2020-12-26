import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

var jsFiles = 
[
  "./node_modules/jquery/dist/jquery.js", 
  "./node_modules/lazysizes/lazysizes.js", 
  "./node_modules/instafeed/src/InstagramFeed.js", 
  "./node_modules/slick-carousel/slick/slick.js", 
  "./backup/assets/javascript/jssor-slider.js", 
  "./backup/assets/javascript/eventos.js", 
  "./backup/assets/javascript/patrocinadores.js", 
  "./backup/assets/javascript/token.js", 
  "./backup/assets/javascript/global.js"
],
jsDest = 'public_html/assets/javascript';

// Tarefa Concat
gulp.task('concat:js', () => {
  return gulp.src(jsFiles)
        .pipe(concat('empacotado2.js'))
        .pipe(gulp.dest(`${jsDest}/empacotado2.js`));
});

// Tarefa Uglify
gulp.task('uglify', () => {
  return gulp.src(`${jsDest}/empacotado2.js`)
        .pipe(uglify())
        .pipe(gulp.dest(`${jsDest}/empacotado2.min.js`));
});

gulp.task('default', ['concat:js', 'uglify']);