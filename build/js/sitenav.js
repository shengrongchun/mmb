"use strict";$(function(){function t(t,e){$.ajax({url:"http://127.0.0.1:9090/api/getsitenav?timestamp="+(new Date).getTime(),success:function(e){var a=template("siteNav",e);t.html(a)}})}t($(".site-nav"))});