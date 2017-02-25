'use strict';
$(function() {
    setCouponList($('.coupon-list'), $.getUrlParam('couponid'))

    function setCouponList(dom, couponid, callback) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getcouponproduct',
            data: { 'couponid': couponid },
            success: function(data) {
                var html = template('couponList', data);
                dom.html(html);
            }
        })
    }
});