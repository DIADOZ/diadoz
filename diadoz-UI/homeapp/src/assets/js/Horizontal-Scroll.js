/**
 * Created by renzodiaz on 2/15/17.
 */

function horizontalFunction(x) {
    if (x.matches) {
    $(function (x) {
        $("body").mousewheel(function (event, delta) {
            
            this.scrollLeft -= (delta * .4);
            event.preventDefault();
        });
    });
    }
}


var x = window.matchMedia("screen and (orientation: landscape)");
horizontalFunction(x);
x.addListener(horizontalFunction);