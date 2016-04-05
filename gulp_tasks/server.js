/**
 * Server Task
 * @param  {Object} gulp  
 * @param  {Object} $     
 * @param  {Object} config
 * @return {Stream}       
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('server', ['watch'], function () {
		var rootdir = $.outDir('basePath');

		$.browserSync({
		    // ui: false,
		    ui: {
		    	port: 9001
		    },
			open: config.server.open,
			notify: false,
		    port: config.server.port,
		    server: {
		      baseDir: rootdir,
		      index: config.server.index
		    },
		    reloadOnRestart: true,
		    logLevel: config.server.logLevel
		});

	});
};