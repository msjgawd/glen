var images = [];
for (var i = 0; i <= 13; i++) {
    images[i] = new Image();
    images[i].src = 'images/slideshow/' + i + '.jpg';
}
var currimage = 0;

function nextImage() {
    currimage++;
    currimage %= 14;
    $('#index_heading_back_background').css('background-image', 'url(' + images[currimage].src + ')');
    $('#index_heading_background').fadeOut(1000, function () {
        $(this).css('background-image', 'url(' + images[currimage].src + ')');
        $(this).toggle(0, function () {
            setTimeout(nextImage, 5000);
        });
    });
}

$(document).ready(function () {
    setTimeout(nextImage, 5000);
});