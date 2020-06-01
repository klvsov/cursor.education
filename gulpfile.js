const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('scss', function(callback) {
    return gulp.src('./hw10.1/scss/style.scss')
               .pipe(sourcemaps.init())
               .pipe(scss())
               .pipe(sourcemaps.write())
               .pipe(gulp.dest('./hw10.1/css/'))
    callback();
});
gulp.task('watch', function() {
    watch(['./hw10.1/*.html', './hw10.1/**/*.css', './hw10.1/**/*.js'], gulp.parallel(browserSync.reload));
    
    watch('./hw10.1/scss/**/*.scss', gulp.parallel('scss'));

    // watch('./hw10.1/scss/**/*.scss', function(){
    //     setTimeout(gulp.parallel('scss'), 1000);
    // });
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './hw10.1/'
        }
    });
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));