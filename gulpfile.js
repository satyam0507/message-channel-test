'use strict';

var babel = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var fs = require('fs');


gulp.task('default', () => {
    runSequence('buildApi', 'buildJS', 'buildView');
})

gulp.task('buildApi', () => {
    return _bundle({
        entries: ['./api/windowMessanger.js'],
        standalone: 'windowMessanger',
        distName: 'windowMessanger.js',
        distFolder: './dist/api/'
    })
});

gulp.task('buildJS', () => {
    var _return;
    fs.readdirSync('./testInBrowser/js/').forEach(file => {
        _return = _bundle({
            entries: ['./testInBrowser/js/' + file],
            standalone: file.split('.')[0],
            distName: file,
            distFolder: './dist/js/'
        })
    });
    return _return;
});

function _bundle(option) {
    return browserify({
            entries: option.entries,
            standalone: option.standalone,
            debug: false,
        })
        .transform("babelify", {
            presets: ['es2015'],
        })
        .bundle()
        .pipe(source(option.distName))
        .pipe(buffer())
        .pipe(uglify({
            compress: false
        }))
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(option.distFolder));
}

gulp.task('buildView', () => {
    gulp.src('./testInBrowser/view/**/*.html').pipe(gulp.dest('./dist/view/'));
})