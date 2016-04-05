/**
 * Help Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('help', function () {
		for (var k in config.help) console.log(config.help[k]);
	});
};