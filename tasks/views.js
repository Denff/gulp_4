"use strict";

import gulp from "gulp";
import gulpif from "gulp-if";
import plumber from "gulp-plumber";
import jade from "gulp-jade";
// import prettify from 'gulp-jsbeautifier';
import inheritance from 'gulp-jade-inheritance';
import cached from 'gulp-cached';
import filter from 'gulp-filter';
import rename from 'gulp-rename';
// import debug from "gulp-debug";
import errorHandler from 'gulp-plumber-error-handler';
// import changed from 'gulp-changed';
// import notify from "gulp-notify";
// import useref from 'gulp-useref';
// import csso from 'gulp-csso';
// import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

gulp.task("views", () => {
    return gulp.src('src/**/*.jade')
    .pipe(plumber({
        errorHandler: errorHandler(`Ошибка в \'template\' task`)
    }))
    .pipe(cached('jade'))
    .pipe(gulpif(global.isWatching, inheritance({
        basedir: 'src'
    })))
    .pipe(filter(function (file) {
        return /src[\\\/]templates/.test(file.path) && !/src[\\\/]templates[\\\/]layout[\\\/]default[\.]jade/.test(file.path) && !/src[\\\/]templates[\\\/]helpers/.test(file.path);
    }))
    .pipe(jade({
        basedir: 'src',
        pretty: true
    }))
    .pipe(rename({
        dirname: '.'
    }))
    .pipe(gulp.dest('dist'))
    // .pipe(browsersync.stream());
});
