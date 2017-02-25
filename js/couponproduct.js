'use strict';
$(function() {
    setCouponList($('.coupon-list'), $.getUrlParam('couponid'))

    function setCouponList(dom, couponid, callback) {
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getcouponproduct' + "?timestamp=" + new Date().getTime(),
            data: { 'couponid': couponid },
            success: function(data) {
                var html = template('couponList', data);
                dom.html(html);
                $("#mask").hide();
                $(".pic>img").on("click", function() {

                    $("#mask>img")[0].src = this.src;
                    $("#mask").fadeIn();
                    return false;
                })
                $("#mask").on("click", function() {
                    $("#mask").fadeOut();
                })
            }
        })
    }
});