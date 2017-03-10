/**
 * Created by renzodiaz on 2/15/17.
 */
$(function() {

    $(".body-container").mousewheel(function(event, delta) {
        event.preventDefault();
        this.scrollLeft -= (delta * .5);
    });

});