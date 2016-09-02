$(document).on("turbolinks:load", function() {
    $(function () {
       var photo = $('#photo');  // 画像セレクタ

       // 画像がフェードインする
       function open(){
           photo.fadeIn(3000, 'easeInQuad', function () { setTimeout(close, 3000); });
       }

       // 画像がフェードアウトする
       function close() {
           photo.fadeOut(1500, 'easeOutQuad', function () { setTimeout(open, 1500); });
       }

       open();
    });

    $(function () {
        var photo2 = $('#photo2');  // 画像セレクタ

        //画像が右スライドする
        function slideToRight() {
            photo2.animate({'left': 356}, 1800, 'easeInOutQuad', function () {
                setTimeout(slideToLeft, 3000);
            });
        }

        //画像が左スライドする
        function slideToLeft() {
            photo2.animate({'left': 0}, 1200, 'easeOutQuad', function () {
                setTimeout(slideToRight, 3000);
            });
        }

        slideToRight();
    });

    $(function () {

        var pic = $('#pic'); // 画像セレクタ
        var intervalID;

        //画像セレクタにプロパティを設定
        pic.prop({
            w: $('#pic-box').width(),  //1コマ分の横幅
            h: $('#pic-box').height(), //1コマ分の高さ
            col: 11,                   //コマ画像の最大横コマ数
            max: 31,                   //全コマ
            num: 0                     //現在のコマ数のインデックス
        });

        //画像の位置を変更
        function change(target) {
            target.prop('num', target.prop('num')+1);
            if(target.prop('num') >= target.prop('max') ){
                clearInterval(intervalID);
            }else{
                target.css({
                    'top': Math.floor(target.prop('num')/target.prop('col'))*target.prop('h')*-1+'px',
                    'left': (target.prop('num')%target.prop('col'))*target.prop('w')*-1+'px'
                });
            }
        }

        //画像の読み込み完了
        function loaded() {
            //0.1秒毎にchange関数を実行
            intervalID = setInterval( function () { change(pic); }, 100 );
        }

        //初期設定
        function init() {
            var img = new Image();
            $(img).on('load', loaded).attr('src', $('#pic').attr('src'));
        }

        init();

    });

    $(function () {

        function photoChange(target) {

            var items = target.find('li'); //li要素のセレクタを格納した配列
            var current = 0;               //現在表示されているインデックス

            //画像のフェードイン
            function open() {
                $(items[current]).fadeIn(1200, 'easeInQuad', function () {
                    setTimeout(change, 1500);
                });
            }

            //画像のフェードアウト
            function close() {
                $(items[current]).fadeOut(1200, 'easeOutQuad');
            }

            //画像の切り替え
            function change() {
                close();
                current = ++current % items.length;
                open();
            }

            open();
        }

        photoChange($('#photolist'));

    });

    $(function () {

        function photoChange2(target) {
            var photoList = target.find('#photolist2 li');  //メイン画像のセレクタを格納した配列
            var tnList = [];  //サムネイル画像のセレクタを格納した配列
            var current = 0;  //現在表示されているインデックス

            //画像のフェードイン
            function open(){
                //tnList[current].attr('src','images/tn'+current+'_ac.jpg');
                $(photoList[current]).stop().fadeOut(1200,'easeOutQuad');
            }

            //サムネイル画像による画像切り替え
            function clickTn(num) {
                if( current != num ){
                    close();
                    current = num;
                    open();
                }
            }

            //初期設定
            function init(){
                target.find('#tnlist li').each(function(index){
                    tnList[index] = $($(this).find('img'));
                    $($(this).find('a')).on('click',function(){
                        clickTn(index);
                    });
                });
            }

            init();
            open();
        }

        photoChange2($('#photoBox'));

    });

    $(function () {

        function photoChange3(target) {

            var photoList = target.find('#photolist li');
            var current = 0;
            var prevBtn = $('#prev a');
            var nextBtn = $('#next a');

            function open() {
                prevBtn.off('click');
                nextBtn.off('click');
                $(photoList[current]).stop().fadeIn(1200, 'easeInQuad', checkControl);
            }

            function close() {
                $(photoList[current]).stop().fadeOut(1200, 'easeOutQuad');
            }

            function clickContorl(type) {
                close();
                switch(type){
                    case 'prev':
                        current--;
                        break;
                    case 'nexet':
                        current++;
                        break;
                }
                open();
            }

            function checkControl() {
                switch(current){
                    case 0:
                        hideControl(prevBtn);
                        showControl(nextBtn);
                        break;
                    case photoList.length-1:
                        showControl(prevBtn);
                        hideControl(nextBtn);
                        break;
                    default:
                        showControl(prevBtn);
                        showControl(nextBtn);
                        break;
                }
            }

            function hideControl(btn) {
                btn.hide();
                btn.off('click');
            }

            function showControl(btn) {
                btn.show();
                btn.off('click').on('click', function () { clickContorl($(this).parent().attr('id'));});
            }

            checkControl();
            open();
        }

        photoChange3($('#photoBox'));

    })

});
