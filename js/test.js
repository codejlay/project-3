$(document).ready(function(){

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress-js', function() {
  // place code for your default task here
  
  gulp.src('js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
  console.log("you are here")
});
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress-js', function() {
  // place code for your default task here
  
  gulp.src('js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
  console.log("you are here")
});
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress-js', function() {
  // place code for your default task here
  
  gulp.src('js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
  console.log("you are here")
});
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress-js', function() {
  // place code for your default task here
  
  gulp.src('js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'));
  console.log("you are here")
});

});