'use strict';

(function() {

    var arrowSelector;

    $(document).ready(function(){
        arrowSelector();
    });

    arrowSelector = function() {
        $('body').on('click', '.select-vacuum .vacuums div', function() {
            var parentOffset, elemWidth, elemOffset, moveValue;
            
            $('.product').removeClass (function (index, css) {
                return (css.match (/\bdc-\S+/g) || []).join(' ') || (css.match (/\bam-\S+/g) || []).join(' ');
            }).addClass($(this).attr('class'));

            $('.select-vacuum .vacuums div').removeClass('current');
            $(this).addClass('current');

            parentOffset = $('.select-vacuum .vacuums').offset();
            elemWidth = ($(this).width()/2)-18; // Minus 18 for the arrow
            elemOffset = $(this).offset();
            moveValue = (elemOffset.left - parentOffset.left)+elemWidth;
            $('.arrow').animate({ left: moveValue+'px' });
        });
    };

}).call(this);