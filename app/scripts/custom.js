'use strict';

(function() {

    var arrowSelector, removeToolSlides;

    $(document).ready(function(){
        arrowSelector();
        removeToolSlides();
    });

    arrowSelector = function() {
        $('body').on('click', '.select-vacuum .vacuums div', function() {
            var parentOffset, elemWidth, elemOffset, moveValue;
            // Remove any redundant slides from the carousel
            // removeToolSlides();

            // Return the carousel back to the first slide
            $('#tool-carousel').carousel(0);

            // Replaces the parent class with the clicked element's class
            $('.product').removeClass (function (index, css) {
                return (css.match (/\bdc-\S+/g) || []).join(' ') || (css.match (/\bam-\S+/g) || []).join(' ');
            }).addClass($(this).attr('class'));

            // Change the current class to the clicked element
            $('.select-vacuum .vacuums div').removeClass('current');
            $(this).addClass('current');

            // Calculate distance and animate the arrow
            parentOffset = $('.select-vacuum .vacuums').offset();
            elemWidth = ($(this).width()/2)-18; // Minus 18 for the arrow
            elemOffset = $(this).offset();
            moveValue = (elemOffset.left - parentOffset.left)+elemWidth;
            $('.arrow').animate({ left: moveValue+'px' });
        });
    };

    removeToolSlides = function () {
        $('#tool-carousel .carousel-inner .item').each(function() {
            // If number of visible child div elements is zero, hide the element, else show the element
            if ($(this).find('div:visible').length === 0)
            {
                $(this).hide();
            }
            else
            {
                $(this).show();
            }
        });
    };

}).call(this);