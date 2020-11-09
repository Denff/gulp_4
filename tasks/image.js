"use strict";

import gulp from "gulp";
import imagemin from "gulp-imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminZopfli from "imagemin-zopfli";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGiflossy from "imagemin-giflossy";
import debug from "gulp-debug";
// import browsersync from "browser-sync";
import cached from 'gulp-cached';
import changed from 'gulp-changed';
// import yargs from "yargs";

// const argv = yargs.argv,
//     production = !!argv.production;

gulp.task("image", () => {
    return gulp.src([
        "src/img/**/*.{jpg,jpeg,png,gif,svg}",
        '!src/img/icons/*.png',
        '!src/img/icons-svg/*.svg',
        '!src/img/favicon/*.*'
    ])
        .pipe(cached('images'))
        .pipe(changed('src/img/', {
            extension: ['.pmg', '.jpg', '.jpeg']
        }))
        .pipe(imagemin([
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3,
                lossy: 2
            }),
            imageminPngquant({
                speed: 5,
                quality: [0.6, 0.8]
            }),
            imageminZopfli({
                more: true
            }),
            imageminMozjpeg({
                progressive: true,
                quality: 90
            }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/img'))
        .pipe(debug({
            "title": "Images"
        }))
        // .on("end", browsersync.reload);
});
