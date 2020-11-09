"use strict";

import gulp from "gulp";
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import cached from 'gulp-cached';
import changed from 'gulp-changed';
import uglify from 'gulp-uglify';
import rename from "gulp-rename";
import debug from "gulp-debug";
import concat from 'gulp-concat';

gulp.task("scriptConcat", () => {
    return gulp.src(['src/scripts/plugins.js', 'src/components/**/*.js', 'src/scripts/theme.js'])
        .pipe(uglify())
        .pipe(concat('theme-concat.js'))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(debug({
            "title": "JS files"
        }));
});
