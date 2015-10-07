// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var concat = require('gulp-concat');
// // var connect = require('gulp-connect');
// var browserSync = require('browser-sync').create();

// gulp.task('compress-js', function(){
//   // place code for your default task here
  
//   	gulp.src('js/*.js')
// 	  .pipe(concat('main.min.js'))
// 	  .pipe(uglify())
// 	  .pipe(gulp.dest('build/js'))

// 	gulp.src('css/*.css')
// 	.pipe(concat('main.css'))
// 	.pipe(gulp.dest('build/css'))
// });

// // gulp.task('connect', function() {
// // 	connect.server();
// // });
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

// 	gulp.watch(['js/*.js'], ['compress-js'])
// 	gulp.watch(['js/*.js'].on('change'. browserSync.reload);
// 	gulp.watch(['css/*.css'].on('change'. browserSync.reload);
// 	// gulp.watch(['css/*.css'], ['compress-css'])
// });



var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');

gulp.task('compress-js', function()
  {
    gulp.src('js/*.js') // What files do we want gulp to consume?
        .pipe(concat('main.min.js'))
        .pipe(uglify()) // Call the uglify function on these files
        .pipe(gulp.dest('build/js')) // Where do we put the result?
  });

// Static server

gulp.task('browser-sync', ['compress-js'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }

    });

gulp.watch('js/*.js', ['compress-js']);
gulp.watch('js/*.js').on('change', browserSync.reload);
gulp.watch('css/*.css').on('change', browserSync.reload);
});

// gulp.task('connect', function()

//   {

//     connect.server();

//   });











