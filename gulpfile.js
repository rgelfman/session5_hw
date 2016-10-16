var gulp = require('gulp');

var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');
// var browserSync = require('browser-sync').create();

var sassOptions =

{
	errLogToConsole: true, 
	outputstyle: 'expanded'
}
var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';
var htmlSource = 'app/**/*.html';



gulp.task('sass', function(){
	// console.log('testing 1 2 3')
	return gulp.src(sassSources)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(sassOutput))
	
});


gulp.task('serve', ['sass'], function(){


	gulp.watch(sassSources, ['sass']);
});












