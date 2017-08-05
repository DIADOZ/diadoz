/**
 * Created by renzodiaz on 12/24/16.
 */

$(document).ready(function(){
    var containerHeight = $(".tile-container").height();
    var postHeight = function(size){
        $(".tile").css("height",(size)+"px");
    };

    postHeight(containerHeight);
});