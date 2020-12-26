import gulp from 'gulp';
import stylus from 'gulp-stylus';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

// Task Stylus
gulp.task('stylus', () => {
  return gulp.src('./assets/styl/main.styl')
        .pipe(stylus({ compress: true}))
        .pipe(gulp.dest('./build/assets/css/main.min.css'));
});

// Task Concat
gulp.task('concat:js', () => {
  return gulp.src('./assets/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./assets/js/main.js'));
});

// Task Uglify
gulp.task('uglify', () => {
  return gulp.src('./assets/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/assets/js/main.min.js'));
});

// Task Imagmin
gulp.task('imagemin', () => {
  return gulp.src('./assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/images/'))
});

gulp.task('default', ['stylus', 'concat:js', 'uglify', 'imagemin']);