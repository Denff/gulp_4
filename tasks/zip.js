"use strict";

import gulp from "gulp";
import zip from 'gulp-zip';

gulp.task("zip", () => {
    return gulp.src('dist/**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'))
});
