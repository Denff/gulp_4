"use strict";

import gulp from "gulp";
import browsersync from "browser-sync";

gulp.task("server", () => {
    browsersync.init({
        server: "./dist/",
        port: 3000,
        notify: true
    });
    global.isWatching = true;
    gulp.watch('src/**/*.jade', gulp.parallel("views"));
    gulp.watch([
        'src/components/**/*.scss',
        'src/styles/**/*.scss',
        'src/vendors/**/*.css',
        'src/vendors/**/*.scss'
    ], gulp.parallel("style", "styleConcat"));
    gulp.watch([
        'src/components/**/*.js',
        'src/scripts/**/*.js',
        'src/vendors/**/*.js'
    ], gulp.parallel("script"));
    gulp.watch([
        'src/img/**/*.*',
        '!src/img/icons/*.png',
        '!src/img/icons-svg/*.svg'
    ], gulp.parallel("image"));
    gulp.watch('src/img/icons/*.png', gulp.parallel("sprite"));
    gulp.watch('src/img/icons-svg/*.svg', gulp.parallel("spritesvg"));
    gulp.watch('src/img/favicon/*.*', gulp.parallel("favicon"));
    gulp.watch('src/fonts/**/*', gulp.parallel("fonts"));
});
