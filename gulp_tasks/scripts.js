/**
 * Scripts Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('scripts', function () {
		var outDir = $.outDir('scripts'),
			_$     = config.arg;

		return gulp.src([config.scripts.include, config.scripts.exclude])
			.pipe($.if(config.babel, $.babel()))
			.pipe($.if(_$.b, $.uglify()))
			.pipe($.if(config.scripts.concat, $.concat(config.scripts.concatfile)))
			.pipe($.if(_$.b, $.rename({suffix: '.min'})))
			.pipe(gulp.dest(outDir));
	});
};