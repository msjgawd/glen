function adjust_sizes() {
    var viewportheight = $(window).height();
    var navbarheight = $('#navbar').outerHeight();
    var footerheight = $('div#footer hr').offset().top - $('div#footer').offset().top;
    $('.fill_height, .fill_view').height(viewportheight - navbarheight);
    $('.half_height').height((viewportheight - navbarheight) / 2);
    $('.partial_height').height(viewportheight - footerheight - navbarheight);
    $('.min_partial_height').css('min-height', viewportheight - footerheight - navbarheight);
}

$(document).ready(function () {
    var logo = '<link rel="shortcut icon" href=images/glenlogo.gif>';
    $('head').prepend(logo);

    var footerhtml = '<div class="footer" id="footer" style="background-color: #334439"><div class="center_vertical height100"><ul id="footer"><li><a href="index.html">Home</a></li><li><a href="maps.html">Maps</a></li><li><a href="contact.html">Contact</a></li><li><a href="facilities.html">Facilities</a></li><li><a href="lots.html">Lots for Sale</a></li><li><a href="#members">Members</a></li><li><a href="pubdocs.html">Public Docs</a></li><li><a href="http://images.drivebc.ca/bchighwaycam/pub/html/www/index-Northern.html" data-popup="true">Border Cams</a></li><li><a id="scrolltotop" style="float: right; margin-right: 3em" href="#">&#8593;Back to Top</a></li></ul><hr align="left"><p class="footer">7159 Mount Baker Highway Deming, WA 98244 &nbsp; &vert; &nbsp; Web Design &amp; Development by <a class="footer" data-popup="true" href="http://msjwave.com">MSJWAVE 2015</a></p></div></div>';
    $('body').append(footerhtml);
    $('a#scrolltotop').click(function (event) {
        console.log('hei');
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 750);
        return false;
    });

    adjust_sizes();
    $(window).resize(adjust_sizes);
});

$(function () {
    $("a[data-popup]").live('click', function (e) {
        window.open($(this)[0].href);
        // Prevent the link from actually being followed
        e.preventDefault();
    });
});