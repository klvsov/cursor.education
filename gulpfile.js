const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

gulp.task('watch', function() {
    watch(['./hw10/*.html', './hw10/**/*.css', './hw10/**/*.js'], gulp.parallel(browserSync.reload));
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './hw10/'
        }
    });
});

gulp.task('watcher', gulp.parallel('server', 'watch'));