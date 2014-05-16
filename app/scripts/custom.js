'use strict';

(function() {

    var arrowSelector, removeToolSlides;

    $(document).ready(function(){
        arrowSelector();
    });

    $(document).ajaxComplete(function(){
        $('#tool-carousel').carousel(0);
    });

    arrowSelector = function() {
        $('body').on('click', '.select-vacuum .vacuums div', function() {
            var parentOffset, elemWidth, elemOffset, moveValue;

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

}).call(this);