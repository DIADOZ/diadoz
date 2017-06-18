/**
 * Created by renzodiaz on 2/15/17.
 */

function horizontalFunction(x) {
    if (x.matches) {
    $(function (x) {


        $(".body-container").mousewheel(function (event, delta) {
            event.preventDefault();
            this.scrollLeft -= (delta * .6);
        });
    });
    }
}


var x = window.matchMedia("only screen and (orientation: landscape)")
horizontalFunction(x)
x.addListener(horizontalFunction)