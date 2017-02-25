# 慢慢买综合实战

## 前言为什么要做这个综合实战项目
1.做这个项目把之前知识点串联起来将知识转换为项目经验 
2.体会公司项目开发的流程 将来去公司能够和后端程序猿好好配合快速上手项目
3.无论是将来面试还是工作都是自己能力和工作经验的表现
## 1.搭建慢慢买项目结构
```
├─ /manmanmai/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /fonts/ ······················ 使用到的字体文件
  ├─ /images/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚本
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```
## 2.使用svn创建服务器进行项目版本控制
1. 组长安装svn服务器创建一个项目的仓库并创建好组内所有成员的账号将仓库的地址发给所有成员
2. 所有成员安装svn客户端和svn汉化包
3. 所有成员使用svn检出组长给的仓库代码
4. 每当一天工作完成或者某个功能块完成后提交一次代码

## 3.划分项目模块和分工
1. 组长根据成员能力划分模块（模块来源项目文档）
	```
	如果是10个人的队伍 
	1人负责首页 
	2人负责比价搜索（1人负责比价分类导航 1人负责商品列表和商品展示）  (大牛)
	1人负责省钱控
	1人负责国内折扣海淘折扣 
	1人负责优惠券
	1人负责品牌大全列表+商城导航 
	1人负责 品牌大全十大品牌和商品评论 (大牛)
	1人凑单品 (大牛)
	1人负责白菜价 (大牛)
	模块划分成10个模块
	首页
	比较搜索(较难)
	省钱控
	国内折扣
	白菜价 (较难)
	海淘折扣
	优惠券
	凑单品 (较难)
	商城导航
	品牌大全 (较难)
	```
2. 成员根据各各模块开始安排时间制定每天任务目标
3. 组长每日查看成员任务完成情况进行适当调整

## 4.理解项目各各模块需求
1. 成员根据组长安排的模块找到对应项目文档的介绍理解项目模块的需求
2. 根据项目需求搭建自己模块需要依赖的文件和模块的骨架

## 5.按照需求实现页面效果
1. 成员根据模块的页面需求先实现页面的基本布局和特效

## 6.根据页面需求和API文档介绍实现数据的交互
1. 理解模块的交互功能需求
2. 学会看懂API文档并调用api测试效果
3. 根据API返回的数据去实现交互功能需求

## 7.测试各模块功能实现情况
1. 各成员完成模块功能后测试功能
2. 确认模块功能完善后提交代码到svn仓库

## 8.整合打包项目发布
1. 组长最终整合所有模块整体和成员一起整体测试所有模块功能细节完善后发布到网上

## 总结

### 通过这几天的综合实战 需要大家掌握的是

1. 学会理解项目的需求和交互

2. 学会和后台程序员以及跟同事之间进行沟通交流

3. 学会看懂并调用后台给的API实现功能 并且看不懂的情况学会询问后台

4. 学会整个项目的开发流程和项目周期
#在项目中使用gulp打包项目
## gulp入门中文
  [官网](http://www.gulpjs.com)
  [中文网](http://www.gulpjs.com.cn)

- 前端自动化构建工具
  js压缩,混淆
  合并.
  css压缩
  html压缩
###其他自动化够构建工具
- grunt ,webpack...


### gulp的5个核心方法
  - task,gulp中是一个个任务的形式来实现功能。
    + task('任务名',function(){
      .....
    });
  - src
    + src('./*.js')
  - dest('./minjs/')// 指定处理后的文件的输出路径.
  - watch('./*.js',['任务名1','任务名2']);
  - run('任务名');//执行指定的任务.

### gulp的安装
  - 使用npm 进行安装
  - `npm install gulp-cli -g`;

### gulp 使用

#### 使用时还需要在项目中通过npm非全局安装gulp
  - `npm install gulp --save-dev`

#### 还需要在当前项目根目录添加一个gulpfile.js文件来写具体的任务代码.

### gulp的一些插件
  - 也是使用npm安装
  - 对js代码进行压缩 gulp-uglify
  - 对代码进行合并 gulp-concat
  - 对css进行压缩 gulp-cssnano
  - 对图片进行压缩 gulp-imagemin
  - 对less进行编译 gulp-less
  - 对html压缩 gulp-htmlmin
  - html选择器 gulp-cheerio
###项目结构
```
├─ /manmanmai/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /fonts/ ······················ 使用到的字体文件
  ├─ /images/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚本
  └─ /XXX.html ················· 所有页面文件
```

###本项目压缩实例gulpfile.js,build目录为压缩后代码
```
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
            //将less编译成css    
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
```
&copy;[@SingularityXD](https://github.com/SingularityXD) 转载请注明出处
