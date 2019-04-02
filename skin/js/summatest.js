$(document).ready(function(){
    $('.bxSlider').bxSlider({
        auto: true,
        pager: false,
        //slideWidth: 960,
        //autoControls: true,
    });

    $.get( "resources/data.php?getBoxes=what-we-do", function(data) {
        var json = $.parseJSON(data);  
        console.log(json);
        var htmlCard = '';

        for (x=0;x<json.length;x++){
            htmlCard+='<div class="column">';
            htmlCard+='<div class="card"  style="border-top: 3px solid ' + json[x]['color'] + '">';
            htmlCard+='<text class="card-title">' + json[x]['title'] + '</text>';
            htmlCard+='<p>' + json[x]['content'] + '</p>';
            htmlCard+='</div></div>';
        }
        
        $( ".box-list" ).append( htmlCard );
    });
});