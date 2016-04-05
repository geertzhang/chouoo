/**
 * Extras Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('extras', ['fonts', 'libs'], function () {
		var outDir = $.outDir();

		return gulp.src([
				config.basePath.src + '*.*',
				'!' + config.basePath.src + '*.{html,php}'
			])
			.pipe(gulp.dest(outDir));
	});

	gulp.task('fonts', function () {
		var outDir = $.outDir('fonts');

		return gulp.src(config.fonts.src + '**/*.*')
			.pipe(gulp.dest(outDir));
	});

	gulp.task('libs', function () {
		var outDir = $.outDir();

		return gulp.src(config.libs.src + '**/*.*')
			.pipe(gulp.dest(outDir));
	});
};