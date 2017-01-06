/*
 * @Author: zhengwei
 * @Date:   2016-10-19 17:07:19
 * @Last Modified by:   zwxs
 * @Last Modified time: 2016-10-27 22:51:21
 */

'use strict';
$(function() {
    setMenu($('#menu > .row'));

    function setMenu(dom, callback) {
        $.ajax({
            "url": "http://127.0.0.1:9090/api/getindexmenu",
            dataType: 'jsonp',
            jsonp: "callback",
            success: function(data) {
                data = data.result;
                var menuHtml = "";
                for (var i = 0; i < data.length; i++) {
                    menuHtml += '<div class="menu-item">';
                    menuHtml += '<a href="' + data[i].titlehref + '">';
                    menuHtml += data[i].img;
                    menuHtml += '<p>' + data[i].name + '</p>';
                    menuHtml += '</a>';
                    menuHtml += '</div>';
                }
                $(dom).html(menuHtml);
                $('#menu > .row > .menu-item:nth-last-child(-n+4)').addClass('hide');
                menuMore($('#menu > .row > .menu-item:nth-child(8) > a'));
            }
        })
    }

    function menuMore(dom, callback) {
        $(dom).on('click', function() {
            $('#menu > .row > .menu-item:nth-last-child(-n+4)').fadeToggle();
        })
    }
    setMoneyCtrlProduct($('.product-list'));

    function setMoneyCtrlProduct(dom, pageid, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            dataType: 'jsonp',
            jsonp: "callback",
            success: function(data) {
                var html = template('moneyCtrl', data);
                dom.html(html);
            }
        });
    }
});