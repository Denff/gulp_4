"use strict";

import gulp from "gulp";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import debug from "gulp-debug";

gulp.task("webp", () => {
    return gulp.src('src/img/webp/**/*.{jpg,jpeg,png}')
        .pipe(webp(imageminWebp({
            // lossless: true,
            // quality: 100,
            // alphaQuality: 100
        })))
        .pipe(gulp.dest("src/img/webp"))
        .pipe(debug({
            "title": "Images"
        }));
});
