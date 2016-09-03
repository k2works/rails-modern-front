$(document).on("turbolinks:load", function() {

    $(function () {

        function setTextTicker(target){

            var SLIDE_DELAY = 8000;
            var SLIDE_SPEED = 1200;
            var TEXT_MAX_LENGTH = 65;

            var w = target.width();
            var len = target.find('li').length;
            var nowIndex = 0;
            var autoID;
            var isOver = false;

            function setAuto(){
                clearTimeout(autoID);
                autoID = setTimeout(setSlide, SLIDE_DELAY);
            }

            function slideOut(selector){
                selector.stop().animate({'left': -w+'px'}, SLIDE_SPEED, function(){
                    $(this).css('left', w+'px');
                });
            }

            function slideIn(selector){
                selector.stop().animate({'left': 0}, SLIDE_SPEED, setAuto);
            }

            function setSlide(){
                if( !isOver ){
                    slideOut( $(target.find('li')[nowIndex]) );
                    nowIndex = ++nowIndex%len;
                    slideIn( $(target.find('li')[nowIndex]) );
                }
            }

            function checkTextOver(){
                $.each( target.find('li'), function () {
                    if( $(this).text().length > TEXT_MAX_LENGTH ){
                        var str = $(this).text().slice(0, TEXT_MAX_LENGTH-3) + '...';
                        $(this).text(str);
                    }
                });
            }

            function init(){
                target.on({
                    'mouseenter': function(){
                        isOver = true;
                    },
                    'mouseleave': function () {
                        isOver = false;
                        setAuto();
                    }
                });
                checkTextOver();
                target.find('li').css('left', w+'px');
                slideIn( $(target.find('li')[nowIndex]) );
            }

            init();

        }

        setTextTicker($('.tickerList'));

    });

    $(function () {

        var kerningList = {};
        kerningList['」「'] = -1;
        kerningList['*「'] = -0.5;
        kerningList['」*'] = -0.5;
        kerningList['*（'] = -0.5;
        kerningList['）*'] = -0.5;
        kerningList['、*'] = -0.5;
        kerningList['。*'] = -0.5;
        kerningList['。（'] = -1;

        function setKerning(target) {

            var html = target.html();
            var newHtml = '';
            var value;
            var str;
            var nextstr;

            for( var i=0; i<html.length; i++){
                value = '';
                str = html.charAt(i);
                nextstr = html.charAt(i+1);
                if( kerningList[str+nextstr] ){
                    value = kerningList[str+nextstr];
                }else{
                    if( kerningList[str+'*']){
                        value = kerningList[str+'*'];
                    }
                    if( kerningList['*'+nextstr] ){
                        value = kerningList['*'+nextstr];
                    }
                }
                if( value == '' ){
                    newHtml += str;
                }else{
                    newHtml += '<span style="letter-spacing:'+value+'em">'+str+'</span>';
                }
            }

            target.html(newHtml);
        }

        $.each( $('.kerning'), function () {
            setKerning($(this));
        });

    });

    $(function () {

        var STEP = 100;
        var TYPING_LINE = '<span class="line">_</span>';

        function setTextAnimate(target){
            var str = target.text();
            var num = 0;
            var typingLine;

            target.text('').append(TYPING_LINE);
            typingLine = target.find('.line');

            for( var i=0; i<str.length; i++){
                setTimeout(function () {
                    typingLine.remove();
                    target.append( str.charAt(num) ).append(typingLine);
                    num++;
                }, i*STEP);
            }

            setTimeout( function () {
                typingLine.remove();
            }, str.length*STEP);

        }

        $.each( $('.animate_txt'), function () {
            setTextAnimate($(this));
        });
    });

});
