
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Compilar SASS
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
});

// Minificar JS
gulp.task('scripts', function () {
  return gulp.src('./js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Otimizar imagens
gulp.task('images', function () {
  return gulp.src('./img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'scripts', 'images'));
