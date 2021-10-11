$(function() {
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;
        

        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 700);
    });

    $("[data-modal]").on("click", function(event){
        event.preventDefault();

        $(modal_сertificate).addClass('show');

    });

    $(modal_сertificate).on("click", function() {
        $(modal_сertificate).removeClass('show');
    });

    $("[data-modall]").on("click", function(event){
        event.preventDefault();

        $(modal_program).addClass('showme');

    });

    $(modal_program).on("click", function() {
        $(modal_program).removeClass('showme');
    });

});