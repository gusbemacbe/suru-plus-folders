var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uglifyjs = require('uglify-js');

var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);

var jsFiles = 
[
  "./../node_modules/jquery/dist/jquery.js", 
  "./../node_modules/lazysizes/lazysizes.js", 
  "./../backup/assets/javascript/instafeed.js",
  "./../node_modules/slick-carousel/slick/slick.js", 
  "./../backup/assets/javascript/jssor-slider.js", 
  "./../backup/assets/javascript/eventos.js", 
  "./../backup/assets/javascript/patrocinadores.js", 
  "./../backup/assets/javascript/token.js", 
  "./../backup/assets/javascript/global.js"
],
jsDest = './../public_html/assets/javascript/';

gulp.task('scripts', function () 
{
  return gulp.src(jsFiles)
  .pipe(concat('empacotado.js'))
  .pipe(gulp.dest(jsDest))

  .pipe(babel(
    { 
      "presets": 
      [
        [
          "@babel/preset-env", 
          {
            "modules": false 
          }
        ]
      ] 
    }
  ))

  .pipe(rename('empacotado.min.js'))
  .pipe(uglify(
  {
    mangle: true,
    compress: 
    {
      sequences: true,
      properties: true,
      dead_code: true,
      drop_debugger: true,
      unsafe: false,
      unsafe_comps: false,
      conditionals: true,
      comparisons: true,
      evaluate: true,
      booleans: true,
      loops: true,
      unused: true,
      hoist_funs: false,
      keep_fargs: false,
      keep_fnames: false,
      hoist_vars: false,
      if_return: true,
      join_vars: true,
      collapse_vars: false,
      reduce_vars: false,
      side_effects: true,
      pure_getters: false,
      pure_funcs: null,
      negate_iife: false,
      drop_console: false,
      passes: 1,
      global_defs: {}
    },
    output: 
    {
      ascii_only: false,
      inline_script: false,
      max_line_len: 32000,
      braces: false,
      semicolons: true,
      comments: false,
      shebang: true,
      preamble: null,
      quote_style: "best"
    }
  })).pipe(gulp.dest(jsDest));
});