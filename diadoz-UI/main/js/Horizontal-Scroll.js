/**
 * Created by renzodiaz on 2/15/17.
 */

function horizontalFunction(x) {
    if (x.matches) {
    $(function (x) {
        $(".body-container").mousewheel(function (event, delta) {
            event.preventDefault();

            var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

            if(isMac){
                this.scrollLeft -= (delta * .9);
            } else {
                this.scrollLeft -= (delta * 150);
            }

        });
    });
    }
}


var x = window.matchMedia("screen and (orientation: landscape)");
horizontalFunction(x);
x.addListener(horizontalFunction);