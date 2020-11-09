"use strict";

import gulp from "gulp";
import plumber from 'gulp-plumber';
import errorHandler from 'gulp-plumber-error-handler';
import replace from 'gulp-replace';
import svgSprite from 'gulp-svg-sprite';

var spritesPaths = {
    icons: {
        images: 'src/img/icons-svg/*.svg',
        sprite: 'img/sprite.svg',
        scss: 'styles/helpers/_sprite-svg.scss',
        tpl: 'src/styles/helpers/_sprite-svg-template.scss'
    }
}

gulp.task('spritesvg', function() {
    return gulp.src(spritesPaths.icons.images)
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            shape: {
                spacing: {
                    padding: 5
                }
            },
            mode: {
                css: {
                    dest: './',
                    // layout: "diagonal",
                    sprite: spritesPaths.icons.sprite,
                    bust: false,
                    render: {
                        scss: {
                            dest: spritesPaths.icons.scss,
                            template: spritesPaths.icons.tpl
                        }
                    }
                }
            },
            variables: {
                mapname: "icons"
            }
        }))
        .pipe(gulp.dest('src'));
});
