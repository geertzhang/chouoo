/**
 * Utilities Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';
	
	gulp.task('clean', function () {
		var target = $.outDir(),
			child = config.arg.c;

		if (child) {
			var dirs = ['css', 'js', 'images'];
			
			for (var i = 0; i < dirs.length; i++) {
				if (child === dirs[i]) target += dirs[i];
			}
			
			return $.del.sync(target);
		} else {
			return $.del.sync(target);
		}
	});

	gulp.task('zip', function () {
		var target, _$, prefix, timestamp;

		target    = $.outDir();
		_$        = config.arg;
		prefix    = _$.z ? _$.z : '';
		timestamp = new Date().getTime();

		return gulp.src(target + '**/*')
			.pipe($.zip(prefix + timestamp + '.zip'))
			.pipe(gulp.dest(config.basePath.zip));
	});
};