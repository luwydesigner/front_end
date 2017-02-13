var gulp = require ('gulp'),
	uglify = require ('gulp-uglify'),
	plumber = require ('gulp-plumber'),
	stylus = require ('gulp-stylus'),
	pug = require ('gulp-pug'),
	concat = require ('gulp-concat');


/* Pug HTML */
gulp.task('pug', ()  =>
	gulp.src('./dev/view/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'))
);
/*Stylus CSS*/
gulp.task('stylus', () =>
	gulp.src('dev/stylus/*.styl')
	.pipe(plumber())
	.pipe(stylus({
		compress: false
	}))
	.pipe(gulp.dest('dist/css/'))
);
/*Concat Javascript*/
gulp.task('scripts', ()=>
	gulp.src('dev/js/*.js')
	.pipe(concat('script.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))
);

gulp.task('default' , ['pug', 'stylus', 'scripts']);

gulp.task('watch', () => {
	gulp.watch('./dev/view/*.pug', ['pug']);
	gulp.watch('./dev/stylus/*.styl', ['stylus']);
	gulp.watch('./dev/js/*.js', ['scripts']);
});



