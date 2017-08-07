﻿; (function ($) {
    $.extend({
        'foucs': function (con) {
            var $container = $('#index_b_hero'), 
                $imgs = $container.find('li.hero'), 
                $leftBtn = $container.find('a.prev'), 
                $rightBtn = $container.find('a.next'), 
                config = {
                    interval: con && con.interval || 35000,
                    animateTime: con && con.animateTime || 500,
                    direction: con && (con.direction === 'right'),
                    _imgLen: $imgs.length
                }
            , i = 0
            , getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; }
            , getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; }
            , silde = function (d) {
                //$imgs.removeClass('cur');
                // $imgs.eq((d ? getPrevIndex(1) : getNextIndex(1))).addClass('cur');
                $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-1800px' : '1800px'));
                $imgs.animate({
                    'left': (d ? '+' : '-') + '=900px'
                }, config.animateTime);
                i = d ? getPrevIndex(1) : getNextIndex(1);
            }
            , s = setInterval(function () { silde(config.direction); }, config.interval);
            $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '900px').end().eq(i - 1).css('left', '-900px');
            $container.find('.hero-wrap').add($leftBtn).add($rightBtn).hover(function () { 
                    clearInterval(s); 
                }, function () { 
                    s = setInterval(function () { 
                        silde(config.direction); 
                    }, config.interval); 
            });
           
            $leftBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(true);
                }
            });

            $rightBtn.click(function () {
                if ($(':animated').length === 0) {
                    silde(false);
                }
            });
        }
    });
}(jQuery));