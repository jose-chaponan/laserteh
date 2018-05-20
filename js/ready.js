function oculta_logo_presentacion(){
    setTimeout(function(){
        $(".logo_presentacion").find("img").animate({"opacity": 0}, 300);
        setTimeout(function(){
            $(".logo_presentacion").css({ "height": 0 });
        }, 500);
    }, 1000)
}

function slider_section(){
    var alto_final      = null,
        alto_pantalla   = null,
        alto_header     = null;

        alto_pantalla = parseInt($(window).height());
        alto_header = parseInt($("header").height());
        
        alto_final = alto_pantalla - alto_header;
        console.log(alto_final);
        console.log(alto_header);
        
        $("#home").css({ 
            "height": alto_final,
            "padding-top": alto_header
        });
        $(".secciones").css({
            "min-height": alto_final
        });
}

$(document).ready(function(){
    $("body").lsPreloader({
        backgroundColor: "#DF101C",
        minimumTime: 1,
        logoImage: "images/paloma-origami.svg",
        progressHeight: "1px",
        progressPosition: "center",
        progressColor: "#ffffff",
        percentFontSize: "16px",
        onStart: function () {
        },
        onComplete: function () {
            oculta_logo_presentacion();
        }
    });
    slider_section();
    $(window).resize(function() {
        slider_section();
    });
});