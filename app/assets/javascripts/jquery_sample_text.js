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
});
