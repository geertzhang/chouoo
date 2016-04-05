/**
 * Template Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('templates', function () {
		var outDir = $.outDir('templates'),
			_$     = config.arg,
			min    = _$.b ? '.min' : '';

		return gulp.src([config.templates.src + '*.' + config.templates.suffix, '!' + config.templates.src + 'components/**/*'])
			.pipe($.include()).on('error', console.log)
			.pipe($.replace(/\%([\w\-]+)\%/g, '$1' + min))
			.pipe(gulp.dest(outDir));
	});
};