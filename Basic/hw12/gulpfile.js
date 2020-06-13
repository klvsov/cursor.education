const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const cssnano = require('gulp-cssnano');

gulp.task('scss', function(callback) {
	return gulp.src('./src/scss/main.scss')
		.pipe( plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
			        sound: false,
			        message: err.message
				}
			})
		}))
		.pipe( sourcemaps.init() )
		.pipe( sass() )
		.pipe( autoprefixer({
			overrideBrowserslist: ['last 4 versions']
		}) )
		.pipe(cssnano())
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./src/css/') )
	callback();
});

gulp.task('watch', function() {
	watch(['./src/*.html', './src/css/**/*.css'], gulp.parallel( browserSync.reload ));

	watch('./src/scss/**/*.scss', function(){
		setTimeout( gulp.parallel('scss'), 1000 )
	})

});

gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./src/"
		}
	})
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));
