'use strict';

var babel = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

var editorBundler = browserify({
    entries: ['./api/index.js'],
    standalone: 'nvWindowMessanger',
    debug: false,
});

var browsers = [];
browsers.push('Last 4 Chrome versions');

gulp.task('main', function() {
    return editorBundler
        .transform("babelify", {
            presets: ['es2015'],
        })
        .bundle()
        .pipe(source('nvWindowMessanger.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});