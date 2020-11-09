"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";
import mincss from "gulp-clean-css";
import rename from "gulp-rename";
import concat from 'gulp-concat';

gulp.task("styleConcat", () => {
    return gulp.src([
        'src/styles/**/*.scss',
        'src/vendors/**/*.scss',
        'src/vendors/**/*.css',
        'src/components/**/*.scss'
    ])
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
        .pipe(concat('styles.css'))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist/css'))
});
