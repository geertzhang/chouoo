/**
 * Gulpfile ES5
 * 
 * @author      wallen_weel
 * @version     0.0.2
 * @license     https://github.com/wallenweel/gulp-project-framework
 * @description A gulp task profile
 */
var gulp, browserSync, $, config, tasks;

gulp        = require('gulp');
browserSync = require('browser-sync');

$      = require('gulp-load-plugins')();
$.argv = require('yargs').argv;
$.del  = require('del');

$.browserSync = browserSync;
$.reload      = browserSync.reload;

config = require('./config')($);
tasks  = ['help', 'styles', 'scripts', 'images', 'templates', 'extras', 'server', 'watch', 'utilities', 'build'];

for (var i = 0; i < tasks.length; i ++) require(config.basePath.tasks + tasks[i])(gulp, $, config);

gulp.task('default', ['help']);




/**
 * Control output directory
 * @param  {String} type Path type, default 'basePath', or 'styles', 'scripts' ...
 * @return {String}      Purpose path
 */
$.outDir = function (type) {
	var _type, _$, _dir, _outdir;

	_type = type || 'basePath';
	_$    = config.arg;

	if (_$.p) _dir = config[_type].dest;
	if (_$.b) _dir = config[_type].build;
	if (_$.a) _dir = [config[_type].dest, config[_type].build];

	_outdir = _dir || config[_type].default;

	return _outdir;
};