$(function () {
    //float window
    $('#float-close').on('click',function(){
        $('#float-window').fadeOut();
        $('#float-window-show').fadeIn();
    });
    $('#float-show').on('click',function(){
        $('#float-window').fadeIn();
        $('#float-window-show').fadeOut();
    });
    //float window end

    // scroll top
    $(window).scroll(function () {
        var $t = $(this).scrollTop();
        if ($t > 600) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').hide();
        }
    });
    $('#goTop').click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    });
    // scroll top end

});

// 敬請期待

$(function () {
    $("#alert").on('click',function () {
        $("#apk-prompt").fadeIn();
    });
    $("#apk-prompt .apk-close").on('click',function () {
        $("#apk-prompt").fadeOut();
    });
});
