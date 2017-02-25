'use strict';
$(function() {
    setCoupon($('.coupon-title'))

    function setCoupon(dom, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcoupon" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                var html = template('couponTitle', data);
                dom.html(html);
            }
        })
    }
});