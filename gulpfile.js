var gulp = require('gulp');

var sass = require('gulp-sass');
var sftp = require('gulp-sftp');
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



gulp.task('deploy', function() {
return gulp.src('./app/**/*')
.pipe(sftp({
host: 'oit2.scps.nyu.edu',
user: 'gelfmanr',
pass: 'rg123890',
remotePath: '/home/p/gelfmanr/web/'
}));
});





gulp.task('serve', ['sass'], function(){


	gulp.watch(sassSources, ['sass']);
});












