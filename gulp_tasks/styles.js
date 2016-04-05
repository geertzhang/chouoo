/**
 * Styles Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';
	
	gulp.task('styles', function () {
		var outDir = $.outDir('styles'),
			_$     = config.arg;

		return gulp.src([config.styles.include, config.styles.exclude])
			.pipe($.sass.sync({outputStyle: config.styles.style}).on('error', $.sass.logError))
			.pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20', 'iOS 7']}))
			.pipe($.if(_$.b, $.cssnano()))
			.pipe($.if(_$.b, $.rename({suffix: '.min'})))
			.pipe(gulp.dest(outDir));
	});
};