/*** Stop Closing Dropdowns ***/

$("dropdownmenuname").click(function(e){
    e.stopPropagation();
})




$(document).ready(function(){
    $(".dropdown").on("hide.bs.dropdown", function(){
        $(".btn").html('Dropdown <span class="caret"></span>');
        var id = $(this).attr('data-id');
        $("#"+id).removeClass('active')
    });
    $(".dropdown").on("show.bs.dropdown", function(){
        $(".btn").html('Dropdown <span class="caret caret-up"></span>');
        var id = $(this).attr('data-id');
        $("#"+id).addClass('active')
    });
});


/*** horizontal Accordions ***/

const horizontalAccordions = $(".accordion.width");

horizontalAccordions.each((index, element) => {
    const accordion = $(element);
    const collapse = accordion.find(".collapse");
    const bodies = collapse.find("> *");
    let width = screen.width;
    // if (width > 768){
        bodies.width(bodies.eq(0).width());
    // }
    accordion.height(accordion.height());
    collapse.not(".show").each((index, element) => {
        $(element).parent().find("[data-toggle='collapse']").addClass("collapsed");
        // $(element).parent().find("[class='collapse-title']").css('display','none');
    });
    collapse.filter(".show").each((index, element) => {
        // $(element).parent().find("[class='collapse-title']").css('display','block');
    });

});



/*** Owl Carousel  ***/

var owl = $('.owl-carousel');
owl.owlCarousel({
    margin:10,
    items: 4,
    touchDrag  : false,
    mouseDrag  : false,
    rewindNav:false,

    responsive: {
        0:{
            items: 1,
            stagePadding: 50
        },
        690:{
            items: 2,
            stagePadding: 60
        },
        1024:{
            items: 3,
        },
        1140:{
            items: 4,
        }
    }
})


$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (e) {
    if (!e.namespace) return;
    var carousel = e.relatedTarget,
        current = carousel.current();
    if (current === carousel.maximum()) {
        $('.nextBtn').attr('stroke','#9AC5EB')
    }else{
        $('.nextBtn').attr('stroke','#266398')
    }
    if (current === 0){
        $('.prevBtn').attr('stroke','#9AC5EB')
    }else{
        $('.prevBtn').attr('stroke','#266398')
    }

});

