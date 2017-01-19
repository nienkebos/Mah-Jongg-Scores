var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('styles', function() {
    gulp.src('style/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style/css/'));
});

gulp.task('watch',function() {
    gulp.watch('style/sass/**/*.scss',['styles']);
});

gulp.task('serve', shell.task([
    'npm start'
]));

gulp.task('run', ['serve', 'watch']);