/**
 * Created by renzodiaz on 3/20/17.
 */

function resizeFunction(x) {
    if (x.matches) {
        $(window).resize(function() {
            var ratio = 1.6;
            $('.tile').width($('.tile').height() * ratio);
            $('.tile-photo').width($('.tile-photo').height() * ratio);
            $('.tile-overlay').width($('.tile-overlay').height() * ratio);

            // instead of directly using "$(window).width() * ratio", you can call a method to
            // calculate width and height each time window is resized.
        });
    }
}


var x = window.matchMedia("screen and (orientation: landscape)");
resizeFunction(x);
x.addListener(resizeFunction);