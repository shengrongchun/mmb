//引入所有所有包
var gulp = require("gulp"),
    less = require("gulp-less"),
    cssnano = require("gulp-cssnano"),
    uglify = require("gulp-uglify"),
    cheerio = require('gulp-cheerio'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin')
    //编译less
gulp.task("less", function() {
        //获取要编译的less
        return gulp.src("./css/**/*.less")
            //将css编译成less    
            .pipe(less())
            //将css压缩
            .pipe(cssnano())
            //输出压缩后的结果
            .pipe(gulp.dest("./build/css"));
    })
    //压缩js
gulp.task("uglify", function() {
        //获取要压缩的js
        return gulp.src("./js/**/*.js")
            //压缩js    
            .pipe(uglify())
            //输出压缩后的结果
            .pipe(gulp.dest("./build/js"));
    })
    //压缩html,并修改引用
gulp.task("html", function() {
        //获取要修改引用的html
        return gulp.src("./*.html")
            //调用cheerio插件可以操作html里面的元素   
            .pipe(cheerio(function($) {
                //遍历link标签
                for (var key in $("link")) {
                    //$("link")对象中不以数字开头的不是link标签,如果访问rel和href属性会报错所以要排除
                    if (isNaN(key)) break;
                    //修改link标签里面的rel属性和href属性
                    $("link")[key].attribs["rel"] = $("link")[key].attribs["rel"].replace('/less', "");
                    $("link")[key].attribs["href"] = $("link")[key].attribs["href"].replace('less', "css");
                }
                //去掉引入编译less包的script标签
                $("script[src='js/less.js']").remove();
            }))
            //压缩html
            .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
            //输出html
            .pipe(gulp.dest('./build'));
    })
    //压缩图片
gulp.task("images", function() {
        //获取要压缩的图片
        return gulp.src("./images/**.**")
            //压缩图片
            .pipe(imagemin())
            //输出图片
            .pipe(gulp.dest("./build/images"));
    })
    //搬运字体
gulp.task("fonts", function() {
        return gulp.src("./fonts/**.**").pipe(gulp.dest("./build/fonts"));
    })
    //批量运行所有的任务,监听所有的修改然后自动打包
gulp.task("default", ["less", "uglify", "html", "images", "fonts"], function() {
    gulp.watch(["./css/**/*.less"], ["less"]);
    gulp.watch(["./js/**/*.js"], ["uglify"]);
    gulp.watch(["./*.html"], ["html"]);
    gulp.watch(["./images/**.**"], ["images"]);
    gulp.watch(["./fonts"], ["fonts"]);
})