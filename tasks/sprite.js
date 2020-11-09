"use strict";

import gulp from "gulp";
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import spritesmith from 'gulp.spritesmith';
import buffer from 'vinyl-buffer';
import merge from 'merge-stream';
// import browsersync from "browser-sync";

var spritesPaths = {
    icons: {
        images: 'src/img/icons/*.png',
        imgName: 'sprite.png',
        cssName: '_sprites.scss',
        imgPath: '../img/sprite.png',
        scss: 'src/styles/helpers'
    }
}

gulp.task('sprite', function() {
    var spriteData = gulp.src(spritesPaths.icons.images).pipe(spritesmith({
        imgName: spritesPaths.icons.imgName,
        cssName: spritesPaths.icons.cssName,
        imgPath: spritesPaths.icons.imgPath
    }));
    var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(gulp.dest('src/img'))
    var cssStream = spriteData.css
    .pipe(gulp.dest(spritesPaths.icons.scss))
    // .on("end", browsersync.reload);
    return merge(imgStream, cssStream);
});
