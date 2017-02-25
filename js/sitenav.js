'use strict';
$(function() {
    setSiteNav($('.site-nav'))

    function setSiteNav(dom, callback) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getsitenav" + "?timestamp=" + new Date().getTime(),
            success: function(data) {
                var html = template('siteNav', data);
                dom.html(html);
            }
        })
    }
})