let gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function(){
    return gulp.src('js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('default', ['scripts'], function(){
    console.log('default task is done');
});