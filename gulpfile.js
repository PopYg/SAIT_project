"use strict";
var gulp = require('gulp');

var print = require('gulp-print');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

// const ftp = require('vinyl-ftp');

/**
 * DIRECTORY
 */
var root = "./public";
var leng = {
    en : "/en"
};
var type = {
    pc : "/pc",
    mo : "/mo"
};
var src = {
    stylesheets : "/stylesheets",
    css : "/css",
    sass : "/sass",
    script : "/js",
    map : "../map",
    images : "/images"
};

/**
 * SASS
 */
var sassFun = function(o){
    return gulp.src(root + o.leng + o.type + src.stylesheets + src.sass + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle:'compact'}).on('error', sass.logError))// nested, expanded, compact, or compressed.
        .pipe(sourcemaps.write(src.map))
        .pipe(gulp.dest(root + o.leng + o.type + src.stylesheets + src.css));
};
gulp.task('en-pc-sass', function(){sassFun({leng : leng.en, type : type.pc});});
gulp.task('en-mo-sass', function(){sassFun({leng : leng.en, type : type.mo});});

/**
 * SCRIPT
 */
gulp.task('scripts', function() {
    return gulp.src([
        root + leng.en + type.pc + "/javascripts/function/default.js",
        root + leng.en + type.pc + "/javascripts/function/*.js"
    ])
        .pipe(concat('design_common.js'))
        .pipe(gulp.dest(root + leng.en + type.pc + "/javascripts/"));
});
gulp.task('scriptsMo', function() {
    return gulp.src([
        root + leng.en + type.mo + "/javascripts/function/default.js",
        root + leng.en + type.mo + "/javascripts/function/*.js"
    ])
        .pipe(concat('design_common.js'))
        .pipe(gulp.dest(root + leng.en + type.mo + "/javascripts"));
});

/**
 * WACTH
 */
gulp.task('all', function(){
    var browserSyncPC = require('browser-sync').create();
    var browserSyncMO = require('browser-sync').create();
    browserSyncPC.init({
        server: {
            baseDir: "./public/en/pc/",
            index: "work_list.html"
        },
        ui: false,
        port:2000
    });
    browserSyncMO.init({
        server: {
            baseDir: "./public/en/mo/",
            index: "work_list.html"
        },
        ui: false,
        port:2002
    });
    gulp.watch(root + leng.en + type.pc + src.stylesheets + '/**/*.scss', ['en-pc-sass']);
    gulp.watch([
        root + '/**/*.css',
        root + '/**/**/*.html',
        root + '/**/*.js'
    ]).on('change', browserSyncPC.reload);

    gulp.watch(root + leng.en + type.mo + src.stylesheets + '/**/*.scss', ['en-mo-sass']);
    gulp.watch([
        root + '/**/*.css',
        root + '/**/*.html',
        root + '/**/*.js'
    ]).on('change', browserSyncMO.reload);
    //gulp.watch(root + leng.en + type.pc + src.stylesheets + '/**/*.css', ['ftp-css']);
    watch([root + leng.en + type.pc + "/javascripts/function/*.js"], function() {gulp.start('scripts');});
    watch([root + leng.en + type.mo + "/javascripts/function/*.js"], function() {gulp.start('scriptsMo');});
});

/**
 * TASK
 */
gulp.task('default', runSequence(
    'en-pc-sass',
    'en-mo-sass',
    'all'
));



// gulp.task( 'ftp-css', function () {
//     let conn = ftp.create( {
//         host:     '119.207.79.176',
//         user:     'ssyencadmin',
//         password: 'ssyenc2017'
//     } );
//
//     let globs = [
//         root + leng.en + type.pc + src.stylesheets + "/css/common.css"
//     ];
//
//     // using base = '.' will transfer everything to /public_html correctly
//     // turn off buffering in gulp.src for best performance
//
//     return gulp.src( globs,{
//         base: root + leng.en + type.pc + src.stylesheets , buffer: false
//     })
//         .pipe( conn.newer( 'ar/stylesheets' ) ) // only upload newer files
//         .pipe( conn.dest( 'ar/stylesheets' ) );
// } );

