// Include gulp
var gulp = require('gulp')

// Include Our Plugins
var jshint = require('gulp-jshint')
var sass = require('gulp-sass')

// Lint Task
gulp.task('lint', function () {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})

// Compile Our Sass
gulp.task('sass', function () {
  return gulp.src('public/stylesheets/style.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
})

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('js/*.js', ['lint', 'scripts'])
  gulp.watch('public/stylesheets/style.sass', ['sass'])
})

// Default Task
gulp.task('default', ['lint', 'sass', 'watch'])
