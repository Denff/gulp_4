"use strict";

import gulp from "gulp";
import plumber from "gulp-plumber";
import errorHandler from 'gulp-plumber-error-handler';
import sourcemaps from "gulp-sourcemaps";
import gulpIf from 'gulp-if';
import cached from 'gulp-cached';
import changed from 'gulp-changed';
import inheritance from 'gulp-sass-inheritance';
import filter from 'gulp-filter';
import sass from "gulp-sass";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import concat from 'gulp-concat';
import debug from "gulp-debug";
// import browsersync from "browser-sync";
// import yargs from "yargs";

// const argv = yargs.argv,
//     production = !!argv.production;

gulp.task('style', () => {
    return gulp.src([
        'src/styles/**/*.scss',
        'src/vendors/**/*.scss',
        'src/vendors/**/*.css',
        'src/components/**/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: errorHandler(`Ошибка в \'Стилях\' task`)
        }))
        .pipe(cached('sass'))
        .pipe(changed('dist/css/', {
            extension: '.css'
        }))
        .pipe(gulpIf(global.isWatching, inheritance({
            dir: 'src'
        })))
        .pipe(filter(file => /src[\\\/]components/.test(file.path) || /src[\\\/]styles/.test(file.path) || /src[\\\/]vendors/.test(file.path) ))
        .pipe(sass())
        .pipe(groupmedia())
        .pipe(autoprefixer({
            cascade: false,
            grid: true
        }))
        .pipe(mincss({
            compatibility: "ie8", level: {
                1: {
                    specialComments: 0,
                    removeWhitespace: true,
                    semicolonAfterLastProperty: true
                },
                2: {
                    mergeAdjacentRules: true,
                    mergeMedia: true,
                    removeEmpty: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removeDuplicateRules: true,
                    removeUnusedAtRules: false
                }
            }
        }))
        .pipe(rename({
            dirname: '.',
            suffix: ".min"
        }))
        .pipe(plumber.stop())
        .pipe(sourcemaps.write("./maps/"))
        .pipe(debug({
            "title": "CSS files"
        }))
        .pipe(gulp.dest('dist/css'));
        // .pipe(browsersync.stream());
});
