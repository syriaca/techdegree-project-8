'use strict';

let gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    maps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function(){
    return  gulp.src('js/**/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(rename('all.min.js'))
            .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('styles', function(){
    return  gulp.src('sass/global.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename('all.min.css'))
            .pipe(gulp.dest('./dist/styles'))
});

gulp.task('default', ['scripts', 'styles'], function(){
    console.log('default task is done');
});