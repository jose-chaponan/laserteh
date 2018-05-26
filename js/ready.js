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

function widthSlider(){
    $(".slider").find(".slideimg").each(function(){
        var imagen = $(this).data("imagen");
        $(this).css({
            "background-image": "url("+imagen+")"
        });
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
            $('.slider').slick({
                arrows: false,
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                fade: true,
                adaptiveHeight: true,
                cssEase: 'linear'
            });
        }
    });
    slider_section();
    widthSlider();
    $(window).resize(function() {
        slider_section();
        widthSlider();
    });

    $(".close_tab_detalle").on("click", function () { 
        var id      = $(this).data("id"); 
        var idtab   = $(this).data("idtab");
        var bodtab  = $(this).data("bodtab");

        $("#"+bodtab).find("li").removeClass("active_content_tab");
        $("#"+id).addClass("active_content_tab");
        $("#"+idtab).find("a").removeClass("active_tab");
    });

    $(".tabs").find("a").on("click", function(){
        var idtabcontent = $(this).data("idtabcontent");
        var idtab = $(this).data("idtab");
        var tab = $(this).data("tab");

        $("#"+tab).find("a").removeClass("active_tab");
        $(this).addClass("active_tab");

        $("#" + idtabcontent).find("li").removeClass("active_content_tab");
        $("#" + idtab).addClass("active_content_tab");
    });
});