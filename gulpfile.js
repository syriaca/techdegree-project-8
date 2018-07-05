'use strict';

let gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    image = require('gulp-image');

gulp.task('scripts', function(){
    return  gulp.src('js/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(rename('all.min.js'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('styles', function(){
    return  gulp.src('sass/global.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename('all.min.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/styles'))
});

gulp.task('images', function(){
    return  gulp.src('images/*')
            .pipe(image())
            .pipe(gulp.dest('./dist/content'))
});

gulp.task('default', ['scripts', 'styles', 'images'], function(){
    console.log('default task is done');
});