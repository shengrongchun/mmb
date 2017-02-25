'use strict';
$(function() {
    setProductList($('.inland-discount-list'))

    function setProductList(dom, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getinlanddiscount" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                var html = template("productList", data);
                dom.html(html);
                $('.loading').hide();
            }
        })
    }
});