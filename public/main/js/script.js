/**
 * Created by renzodiaz on 8/6/16.
 */

    $(document).ready(function(){
        var bodySize = $('div.body').height();
        var postSize = function(size) {
            $(".entry-wrap").css("height", (size)+"px");
        };

        postSize(bodySize);
    });




