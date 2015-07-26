function adjust_sizes() {
    var viewportheight = $(window).height();
    var navbarheight = $('#navbar').outerHeight();
    var footerheight = $('#footer').outerHeight();
    $('.fill_height, .fill_view').height(viewportheight - navbarheight);
    $('.half_height').height((viewportheight - navbarheight) / 2);
    $('.partial_height').height(viewportheight - footerheight - navbarheight);
    $('.min_partial_height').css('min-height', viewportheight - footerheight - navbarheight);
}

$(document).ready(function () {
    var footerhtml = '<div class="footer" id="footer" style="background-color: #d3d3d3"><div class="copyright_by center_vertical height100p"><p class="footer">Created by <a class="footer" href="https://www.msjwave.com">MSJWAVE 2015</a></p></div></div>';
    $('body').append(footerhtml);

    adjust_sizes();
    $(window).resize(adjust_sizes);
});