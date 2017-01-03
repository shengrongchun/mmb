'use strict'

//1.0 导入mongoose包
const mogoose =require('mongoose');

//2.0 定义scheme结构
let scheme = new mogoose.Schema({

	 title : String,  //标题
	 type: Number,  // 分类 ,备用默认为0
	 imgsrc : String,  //图片地址
	 summary : String, //视频信息摘要
	 content : String, // 视频详细介绍
	 status : Number  //状态 ，1：删除 0：正常
});

//3.0 实例化model对象
let model = mogoose.model('videoInfo',scheme);
