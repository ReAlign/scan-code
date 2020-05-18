var util = {
    /**
     * 删除转圈遮罩层
     */
    removeMask: function () {
        //$(top.document.body).find('#loading').remove();
        $('#loading').remove();
    },
    /**
     * 添加转圈遮罩层
     */
    showMask: function () {
        var html = '<div id="loading" style="position: fixed;' +
            'background: black url(images/loading.gif) no-repeat center center;' +
            'left: 0;top: 0;width: 100%;height: 100%;opacity: 0.8;z-index: 99999;">' +
            '</div>';
        $(top.document.body).append($(html));
        // $('body').append($(html));
    },
};