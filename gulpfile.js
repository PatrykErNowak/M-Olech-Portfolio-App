const gulp = require('gulp');
const options = require('./config'); // options from config.js

// HTML
const fileinclude = require('gulp-file-include'); //For supporting partials if required

// CSS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss'); //For Compiling  utilities
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// JS
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// Others
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

//----------------------------------
// TASKS

function html(done) {
  gulp
    .src(options.paths.html[0])
    .pipe(fileinclude())
    .pipe(gulp.dest(options.paths.dist));
  done();
}

function buildStyles(done) {
  gulp
    .src(options.paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename(options.config.cssFileName + '.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(options.paths.css));
  done();
}

function javascript(done) {
  gulp
    .src(options.paths.js)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(rename(options.config.jsFileName + '.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(options.paths.jsDist));
  done();
}

function convertImg(done) {
  gulp
    .src(options.paths.img)
    .pipe(imagemin())
    .pipe(gulp.dest(options.paths.imgDist));
  done();
}

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist,
    },
    open: true,
    browser: 'chrome',
  });
  done();
}

function cleanStuff(done) {
  gulp
    .src(options.paths.dist + '/*', {
      read: false,
      allowEmpty: true,
    })
    .pipe(clean());
  done();
}

function watchForChanges(done) {
  gulp.watch(options.paths.html[0], html).on('change', browserSync.reload);
  gulp.watch(options.paths.sass, buildStyles).on('change', browserSync.reload);
  gulp.watch(options.paths.js, javascript).on('change', browserSync.reload);
  gulp.watch(options.paths.img, convertImg).on('change', browserSync.reload);

  done();
}

const build = gulp.parallel(html, buildStyles, javascript, convertImg);

exports.default = gulp.series(build, startBrowserSync, watchForChanges);

exports.clean = cleanStuff;
exports.build = build;
exports.server = gulp.series(startBrowserSync, watchForChanges);
