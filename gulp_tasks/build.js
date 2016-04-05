/**
 * Build Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('build', ['clean'], function () {
		return gulp.start(['styles', 'scripts', 'images', 'templates', 'extras']);
	});
};