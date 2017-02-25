'use strict';
$(function() {
    // setMenu($('#menu > .row'));

    // function setMenu(dom, callback) {
    //     $.ajax({
    //         "url": "http://127.0.0.1:9090/api/getindexmenu",
    //         success: function(data) {
    //             console.log(data)
    //             data = data.result;
    //             var menuHtml = "";
    //             for (var i = 0; i < data.length; i++) {
    //                 menuHtml += '<div class="menu-item">';
    //                 menuHtml += '<a href="' + data[i].titlehref + '">';
    //                 menuHtml += data[i].img;
    //                 menuHtml += '<p>' + data[i].name + '</p>';
    //                 menuHtml += '</a>';
    //                 menuHtml += '</div>';
    //             }
    //             $(dom).html(menuHtml);
    //             $('#menu > .row > .menu-item:nth-last-child(-n+4)').addClass('hide');
    //             menuMore($('#menu > .row > .menu-item:nth-child(8) > a'));
    //         }
    //     })
    // }
    renderMenu($("#menu > .row"))

    function renderMenu(dom) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getindexmenu" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                var html = template("menudata", data)
                dom.html(html)
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
            url: "http://127.0.0.1:9090/api/getmoneyctrl" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                var html = template('moneyCtrl', data);
                dom.html(html);
            }
        });
    }
});