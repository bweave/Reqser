var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var notify = require('gulp-notify');

var paths = {
    www: './app',
    scss: './app/scss/**/*.scss',
    css: './app/css'
};

gulp.task('sass', function() {
    gulp.src(paths.scss)
        .pipe(sass({
            errLogToConsole: true,
            onError: function(err) {
                notify('SASS ERR!\n', err);
            }
        }))
        .pipe(notify('SASS: <%= file.relative %>'))
        .pipe(gulp.dest(paths.css));
});

gulp.task('server', function() {
  gulp.src(paths.www)
    .pipe(server({
        port: 8001,
        livereload: true,
        directoryListing: false,
        fallback: 'index.html'
    }))
    .pipe(notify());
});

gulp.task('watch', function() {
    gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', ['sass', 'server', 'watch']);