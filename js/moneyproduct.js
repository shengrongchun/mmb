'use strict';
$(function() {
    // setProductList($('.money-product'), $.getUrlParam('productid'))

    // function setProductList(dom, productid, callback) {
    //     $.ajax({
    //         url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
    //         data: { 'productid': productid },
    //         success: function(data) {
    //             var html = template("moneyProduct", data);
    //             dom.html(html);
    //         }
    //     })
    // }
    renderProduct($('.money-product'), $.getQueryString("productid"))

    function renderProduct(dom, id) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrlproduct" + "?timestamp=" + new Date().getTime(),
            data: { "productid": id },
            success: function(data) {
                var html = template("moneyProduct", data)
                dom.html(html);
            }
        })

    }
});