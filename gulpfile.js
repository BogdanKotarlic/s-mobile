const { dest, watch, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

function compilescss() {
    return gulp.src('./styles/style.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(dest('./styles/css'))
}

function watchTask() {
    watch('./styles/style.scss', compilescss);
}

exports.default = series (
    compilescss,
    watchTask
);