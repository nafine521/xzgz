var _w = $(window).width();
var _h = $(window).height();
$(function(){ 
    (function(){
        $(".getTop").click(function(){ 
            $('.fixed ul li').removeClass('active');
            $.scrollTo('body',500); 
        });

        $('.fixed ul li').click(function() {
            $('.fixed ul li').removeClass('active');
            var to = $(this).attr('to');
            $(this).addClass('active');
            $.scrollTo('.'+to,500); 
        });
        
    })();

    // 精彩演讲
    (function(){
        var _li = $('.good_lecture .player_list ul li');
        var embed = $('.player_list .player embed');
        
        _li.on('click', function(event) {
            var li_src = $(this).attr('src');
            _li.removeClass('active');
            $(this).addClass('active');
            $('.player_list .player').html('<embed src="'+li_src+'" allowFullScreen="true" quality="high" width="760" height="422" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>');
        });

    })();

    // 嘉宾致辞
    (function(){
        var bannerList = $( '.to_2 ul' );
        var $li = $('.to_2 ul li');
        var len = $li.length;
        
        var move_now = 0;
        var move_num = 228;
        var w = len * move_num ; 

        var overLen = (move_num * len) - (move_num * 4);
        var PAGE = (overLen / move_num)+1 ;
        var clickNum = moveLen = 1;

        var prev = $('#btn_prev');
        var next = $('#btn_next');

        bannerList.css('width', (w + 15) + 'px');
        $li.hover(function() {
            $li.removeClass('active');
            $(this).addClass('active');
            
            if ($(this).attr('index')) {
                $('.description').hide();
                $('#'+$(this).attr('index')).show();
            };
        });


        prev.click(function() {
            if (clickNum > 1) {
                clickNum--;
                moveLen = moveLen + move_num; 
                bannerList.animate({'marginLeft': moveLen}, 500);
            }
        });

        next.click(function() {
            if (clickNum < PAGE) {
                clickNum++;
                moveLen = moveLen - move_num; 
                bannerList.animate({'marginLeft': moveLen}, 500);
            }
            
        });

    })();

    // 精彩瞬间   
    (function(){
        var circle = $('.circle');
        circle.css({
            left: (1080 - circle.width()) / 2 +'px',
        });

        var heros = $('.heros li');
        var big_len = heros.length;
        var circle = $('.circle');
        var str;
        $.each(heros, function(index, val) {
            
             str += '<li>'+$(this).html()+'</li>';
        });
       // circle.append( str );

        circle.find('li').click(function(event) {
            circle.find('li').removeClass('circle-cur');
            $(this).addClass('circle-cur');
        });

    })();
        
    // 发布会议程
    // (function(){
       
    //    var plan_dis = $(".plan .dis");
    //    plan_dis.css({
    //        left: (_w - plan_dis.width()) / 2 + 'px',
    //      //  top: (_h - plan_dis.height()) / 2 + 'px',
    //    });

    //    $('.fixed h3').click(function(event) {

    //         $(".plan").fadeIn('fast');
    //         $(".plan").find('.dis').show();
    //         $(".plan").find('.dis').animate({top:(_h - plan_dis.height()) / 2+"px"},500,function(){
    //              $(".plan").find('.dis-no').fadeIn('slow');
    //         });
    //    });

    // })();
});

var $ul = $('.to_2 .btnBox ul');
function btn_next(){
    var li_1=$(".to_2 ul li:eq(0)").remove();
    $ul.append(li_1);
}

function btn_prv(){
    var len = $('.to_2 ul li').length - 1;
    var li_1=$(".to_2 ul li:eq("+len+")").remove();
    $ul.prepend(li_1);
}

function close(){
    var plan = $(".plan");
    // plan.find('.dis').animate({top:"-"+_h+"px"},500,function(){
    //     plan.find('.dis-no').fadeOut('slow');
    // });
    plan.find('.dis').fadeOut('fast',function(){
        plan.find('.dis-no').fadeOut('fast');
        $(this).css("top",$(".plan .dis").height()+'px');
    });
}
