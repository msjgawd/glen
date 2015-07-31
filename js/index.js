var images = [];
for (var i = 0; i <= 13; i++) {
    images[i] = new Image();
    images[i].src = 'images/slideshow/' + i + '.jpg';
}

var nextimage = 1;
var timers = [];
var lock = 0;

function nextImage() {
    lock++;
    var mylock = lock;
    $('#index_heading_background').stop(true, true);
    nextimage %= images.length;
    for (var i = timers.length - 1; i >= 0; i--) {
        clearTimeout(timers[i]);
        timers.pop();
    }
    $('#index_slideshow_nav_image_' + nextimage).addClass('selected').parent().siblings().children().removeClass('selected');
    if (mylock != lock) return;
    $('#index_heading_back_background').css('background-image', 'url(' + images[nextimage].src + ')');
    if (mylock != lock) return;
    $('#index_heading_background').fadeOut(1000, function () {
        $(this).css('background-image', 'url(' + images[nextimage].src + ')');
        if (mylock != lock) return;
        nextimage++;
        $(this).toggle(0, function () {
            timers.push(setTimeout(nextImage, 5000));
        });
    });
}

function loadSlideshowNav() {
    for (var i = 0; i < images.length; i++) {
        $('#index_slideshow_nav_list').append('<li><div id="index_slideshow_nav_image_' + i + '" class="index_slideshow_nav_image unhighlightable">&nbsp;</div></li>');
    }

    $('#index_slideshow_nav_image_0').addClass('selected');

    $('.index_slideshow_nav_image').click(function () {
        nextimage = parseInt($(this).attr('id').split('_')[4]);
        nextImage();
    })
}

$(document).ready(function () {
    loadSlideshowNav();
    setTimeout(nextImage, 5000);
});