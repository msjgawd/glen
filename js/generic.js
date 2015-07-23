$(document).ready(function () {
    var footerhtml = '<div class="footer" id="footer" style="background-color: #331111"><div class="copyright_by center_vertical height100p"><p class="footer">Created by <a class="footer" href="https://www.msjwave.com">MSJWAVE 2015</a></p></div></div>'
    $('body').append(footerhtml);

    var viewportheight = $(window).height();
    var navbarheight = $('#navbar').outerHeight();
    var footerheight = $('#footer').outerHeight();
    $('.fill_height, .fill_view').height(viewportheight - navbarheight);
    $('.half_height').height((viewportheight - navbarheight) / 2);
    $('.partial_height').height(viewportheight - footerheight - navbarheight);
    $(window).resize(function () {
        viewportheight = $(window).height();
        $('.fill_height, .fill_view').height(viewportheight - navbarheight);
        $('.half_height').height((viewportheight - navbarheight) / 2);
        $('.partial_height').height(viewportheight - footerheight - navbarheight);
    });
});