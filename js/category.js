'use strict';
$(function() {

    // var  = $('#menu');
    setCategoryTitle($('#category > .row'));

    function setCategoryTitle(dom, callback) {
        $.ajax({
            "url": "http://127.0.0.1:9090/api/getcategorytitle" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                data = data.result;
                var titleHtml = '<ul class="category-title">';
                for (var i = 0; i < data.length; i++) {
                    titleHtml += '<li>';
                    titleHtml += '<a href="javascript:void(0)" data-title-id="' + data[i].titleId + '" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">';
                    titleHtml += data[i].title;
                    titleHtml += '</a>';
                    titleHtml += '</li>';
                }
                titleHtml += "</ul>";
                $(dom).html(titleHtml);
                setCategory($('#category > .row > .category-title > li > a'));
            }
        })
    }

    function setCategory(dom, callback) {
        $(dom).one('click', function() {
            var that = $(this);
            $(this).parent().find('ul').toggleClass('hide');
            $.ajax({
                url: "http://127.0.0.1:9090/api/getcategory" + "?timestamp=" + new Date().getTime(),
                data: { "titleid": $(this).data('titleId') },
                success: function(data) {
                    data = data.result;
                    var categoryHtml = '<ul class="category-content clearfix">';
                    for (var i = 0; i < data.length; i++) {
                        categoryHtml += '<li>';
                        categoryHtml += '<a href="productlist.html?categoryid=' + data[i].categoryId + '&category=' + data[i].category + '&pageid=1" data-category-id="' + data[i].categoryId + '">';
                        categoryHtml += data[i].category;
                        categoryHtml += '</a>';
                        categoryHtml += '</li>';
                    }
                    categoryHtml += "</ul>";
                    that.parent().append(categoryHtml);
                }
            })
        })
        $(dom).on('click', function() {
            $(this).parent().find('ul').fadeToggle();
            $(this).parent().siblings().find("ul").fadeOut();


        })
    }
});