/**
 * Watch Task
 * @param  {Object} gulp
 * @param  {Object} $
 * @param  {Object} config
 * @return {Stream}
 */
module.exports = function (gulp, $, config) {
	'use strict';

	gulp.task('watch', ['styles', 'scripts', 'templates', 'images', 'extras'], function () {
		var rootdir   = $.outDir();
		var setReload = config.reload;

		gulp.watch(config.styles.src + '**/*.scss', ['styles']);
		gulp.watch(config.scripts.src + '**/*.js', ['scripts']);
		gulp.watch(config.images.src + '**/*.*', ['images']);
		gulp.watch(config.fonts.src + '**/*.*', ['fonts']);
		gulp.watch(config.libs.src + '**/*.*', ['libs']);
		gulp.watch(config.templates.src + '**/*.' + config.templates.suffix, ['templates']);

		if (setReload === 'liveReload') {
			$.livereload.listen();
			gulp.watch(rootdir + '**/*', ['reload']);
		} else if (setReload === 'browserSync') {
			gulp.watch(rootdir + '**/*').on('change', $.reload);
		}
	});

	gulp.task('reload', function () {
		var rootdir   = $.outDir();
		var files = [
				rootdir + '**/*.*',
				'!' + rootdir + '*.txt',
				'!' + rootdir + '*.ico'
			];

		gulp.src(files).pipe($.livereload({
			quiet: config.server.quiet
		}));
	});
};