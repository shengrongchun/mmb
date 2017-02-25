'use strict';
$(function() {
    setProductList($('.discount-product'), $.getUrlParam('productid'))

    function setProductList(dom, productid, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getdiscountproduct",
            data: { 'productid': productid },
            success: function(data) {
                var html = template("discountProduct", data);
                dom.html(html);
            }
        })
    }
});