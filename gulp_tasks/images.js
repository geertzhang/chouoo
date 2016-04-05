/**
 * Images Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('images', function () {
		var outDir = $.outDir('images');

		return gulp.src(config.images.src + '**/*.*')
			.pipe($.if(
				config.arg.b,
				$.cache($.imagemin({
			      progressive: true,
			      interlaced: true,
			      svgoPlugins: [{cleanupIDs: false}]
		    }))))
			.pipe(gulp.dest(outDir));
	});
};