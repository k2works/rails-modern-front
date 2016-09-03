$(document).on("turbolinks:load", function() {

    $(function () {

        function loadImages() {
            var srcList = [];
            var loadIndex = 0;

            function open() {
                $('#main').find('img').css({
                    'display': 'block',
                    'opacity': 0
                }).animate({'opacity': 1}, 1200);
            }

            function complete(){
                open();
            }

            function loaded() {
                if( loadIndex != (srcList.length -1)){
                    loadIndex++;
                    imgLoad();
                }else{
                    complete();
                }
            }

            function imgLoad(){
                var img = new Image();
                $(img).on('load', loaded).attr('src', srcList[loadIndex]);
            }

            function init() {
                $('#main').find('img').each(function (index) {
                    srcList[index] = $(this).attr('src');
                });
                imgLoad();
            }

            init();
        }

        loadImages();

    })
});
