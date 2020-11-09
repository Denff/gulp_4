"use strict";

import gulp from "gulp";

const requireDir = require("require-dir");

requireDir("./tasks/");

export const development = gulp.series("clean", "sprite", "spritesvg",
gulp.parallel(["views", "style", "styleConcat", "script", "scriptConcat", "favicon", "image", "fonts"]),
    gulp.parallel("server"));

export const prod = gulp.series("clean", "sprite", "spritesvg",
    gulp.series(["views", "style", "styleConcat", "script", "scriptConcat", "favicon", "image", "fonts", "zip"]));

export default development;
