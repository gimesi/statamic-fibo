// Slightly modified script from Nathan Smith's "unsemantic grid" demo
// Find it on: https://github.com/nathansmith

var APP = (function($, window, document, undefined) {
    'use strict';
    $(document).ready(function() {
        APP.go();
    });
    var body;
    return {
        go: function() {
            var i, j = APP.init;
            for (i in j) {
                j.hasOwnProperty(i) && j[i]();
            }
        },
        init: {
            assign_dom_vars: function() {
                body = $(document.body);
            },
            measure_width: function() {
                var timer;
                var block = $('.test-block');
                if (!block.length) {
                    return;
                }

                function do_calc() {
                    clearTimeout(timer);
                    block.each(function() {
                        var el = $(this);
                        var width = el.outerWidth() + 'px';
                        el.find('.dynamic-px-width:first').html(width);
                    });
                }
                $(window).load(function() {
                    do_calc();
                });
                $(window).off('resize.do_calc').on('resize.do_calc', function() {
                    clearTimeout(timer);
                    timer = setTimeout(do_calc, 16);
                });
            }
        }
    };
})(jQuery, this, this.document);