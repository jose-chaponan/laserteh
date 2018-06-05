function oculta_logo_presentacion(){
    setTimeout(function(){
        $(".logo_presentacion").find("img").animate({"opacity": 0}, 300);
        setTimeout(function(){
            $(".logo_presentacion").css({ "height": 0 });
        }, 500);
    }, 1000)
}

function widthSlider(){
    $(".slider").find(".slideimg").each(function(){
        var imagen = $(this).data("imagen");
        $(this).css({
            "background-image": "url("+imagen+")"
        });
    });
    $(".slider_home").find(".slideimghome").each(function(){
        var imagen = $(this).data("imagen");
        $(this).css({
            "background-image": "url("+imagen+")"
        });
    });

    var headerH = $("header").height();
    $(".ancla").data("ancla_bleed", headerH);
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
            $('.slider_home').slick({
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
                pauseOnHover: false,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            arrows: false,
                            dots: false,
                            infinite: true,
                            speed: 1000,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            fade: true,
                            adaptiveHeight: true,
                            pauseOnHover: false,
                            cssEase: 'linear',
                        }
                    }
                ]
            });

            AOS.init({
                easing: 'ease-out-back',
                duration: 1000
            });
        }
    });

    widthSlider();

    $(window).resize(function() {
        widthSlider();
    });

    $('.content_tab').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        draggable: false,
        responsive: [
             {
                 breakpoint: 1024,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 arrows: false,
                 infinite: false,
                 draggable: false
             },
             {
                 breakpoint: 1023,
                 settings: 'unslick'
             }
         ]
        // fade: true
        // asNavFor: '#tab1'
    });

    $(".close_tab_detalle").on("click", function () {
        var id      = $(this).data("id");
        var idtab   = $(this).data("idtab");
        var bodtab  = $(this).data("bodtab");

        var ventana = $(window).width();

        if (ventana < 1024) {
            $("#"+bodtab).find("li").removeClass("active_content_tab");
            $("#"+id).addClass("active_content_tab");
        }
        else{
            $("#"+bodtab).slick('slickGoTo', 0);
        }
        $("#"+idtab).find("a").removeClass("active_tab");

    });


    $(".tabs").find("a").on("click", function(e){
        e.preventDefault();
        var idtabcontent = $(this).data("idtabcontent");
        var idtab = $(this).data("idtab");
        var tab = $(this).data("tab");
        var slideno = $(this).data('slide');

        var ventana = $(window).width();

        $("#"+tab).find("a").removeClass("active_tab");
        $(this).addClass("active_tab");

        if (ventana < 1024) {
            $("#" + idtabcontent).find("li").removeClass("active_content_tab");
            $("#" + idtab).addClass("active_content_tab");
        }
        else{
            $("#" + idtabcontent).slick('slickGoTo', slideno - 1);
        }


    });

    $(".tabs").find("a").click(function(e) {


    });



    var menu = false;

    $(".hamburguer").on("click", function(event) {
        event.preventDefault();
        if (menu){
            $(this).removeClass("active_burguer");
            $("nav").removeClass("active_nav");

            $(".overflow").addClass('fadeOutoverflow');
            $(".modal").addClass('fadeOutmodal');

            setTimeout(function () {
                $(".overflow").removeClass('fadeOutoverflow fadeInoverflow');
                $(".modal").removeClass('fadeOutmodal fadeInmodal');
            }, 500);

            menu = false;
        }
        else{
            $(this).addClass("active_burguer");
            $("nav").addClass("active_nav");
            menu = true;
        }
    });
    $("nav").find(".ancla").on("click", function () {
        setTimeout(function () {
            $(".hamburguer").removeClass("active_burguer");
            $("nav").removeClass("active_nav");
            menu = false;
        }, 500);
    });
});
