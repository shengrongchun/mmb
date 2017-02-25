'use strict';
$(function() {
    setCategoryTitle($('#category > .row'));

    function setCategoryTitle(dom, callback) {
        $.ajax({
            "url": "http://127.0.0.1:9090/api/getbrandtitle",
            success: function(data) {
                data = data.result;
                var titleHtml = '<ul class="category-title">';
                for (var i = 0; i < data.length; i++) {
                    titleHtml += '<li>';
                    titleHtml += '<a href="brand.html?brandtitleid=' + data[i].brandTitleId + '" data-title-id="' + data[i].brandTitleId + '" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">';
                    titleHtml += data[i].brandTitle;
                    titleHtml += '</a>';
                    titleHtml += '</li>';
                }
                titleHtml += "</ul>";
                $(dom).html(titleHtml);
            }
        })
    }
});