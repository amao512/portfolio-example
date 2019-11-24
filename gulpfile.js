let gulp 		= require('gulp'),
	rename 		= require('gulp-rename'),
	sass 		= require('gulp-sass'),
	browserSync = require('browser-sync').create();

const cssStyle = done => {
	gulp.src('src/sass/**.scss')
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
	
	done();
}

const sync = done => {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 3000
	});

	done();
}

const browserReload = done => {
	browserSync.reload();
	done();
}

const watchFiles = () => {
	gulp.watch('./src/sass/**/*', cssStyle);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(watchFiles, sync));