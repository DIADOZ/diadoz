/**
 * Created by renzodiaz on 3/20/17.
 */
$(window).resize(function() {
    var ratio = 1.6;
    $('.tile').width($('.tile').height() * ratio);
    $('.tile-photo').width($('.tile-photo').height() * ratio);

    // instead of directly using "$(window).width() * ratio", you can call a method to
    // calculate width and height each time window is resized.
})