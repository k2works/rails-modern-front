$(document).on("turbolinks:load", function() {
    $(function () {

        function setModalPhots(target) {
            function resizeModal(imgW, imgH) {
                var ww = $(window).width();
                var wh = $(window).height();
                var dh = $(document).height();
                if ($.isNumeric(imgW) && $.isNumeric(imgH)) $('#modalBox').width(imgW).height(imgH);
                var boxTop = Math.floor((wh - $('#modalBox').innerHeight()) / 2) + $(window).scrollTop();
                var boxLeft = Math.floor((ww - $('#modalBox').innerWidth()) / 2);
                $('#modalBox').offset({top: boxTop, left: boxLeft});
                $('#modalContent').width(ww).height(dh);
                $('#modalOverlay').width(ww).height(dh);
            }

            function loadedModal(src, w, h){
                $('#modalPicture').attr('src', src);
                $('#modalLoading').fadeOut( function(){ $('#modalPicture').fadeIn(); } );
                resizeModal(w, h);
            };

            function loadModal(src){
                var img = new Image();
                $(img).on('load', function(){ loadedModal(src, img.width, img.height); }).attr('src', src);
            };


            function openModal(src) {
                $('#modalPicture').hide();
                $('#modalCloseBtn').fadeIn();
                $('#modalLoading').fadeIn();
                $('#modalContent').fadeIn();
                resizeModal(80, 80);
                loadModal(src);
            }

            function closeModal() {
                $('#modalContent').fadeOut(function () {
                    $('#modalContent').hide();
                });
            }

            function createModal(){
                $('<div>', {
                    'id': 'modalContent',
                    'html': '<div id="modalOverlay"></div><div id="modalBox"><p id="modalPictureBox"><img id="modalPicture"></p><p id="modalCloseBtn"></p><p id="modalLoading"></p></div>'
                }).appendTo('body');
                $('#modalOverlay').css({
                    'background': '#000',
                    'opacity': 0.8
                });
                $('#modalContent').hide();
            };

            function setModalEvent(){
                target.find('a').each(function(index){
                    $(this).on('click', function(){
                        openModal( $(this).attr('href') );
                        return false;
                    });
                });
                $('#modalCloseBtn').on('click', closeModal);
                $('#modalOverlay').on('click', closeModal);
                $(window).on('resize', resizeModal);
            };

            function init() {
                createModal();
                setModalEvent();
            }

            init();
        }

        setModalPhots($('#photos'));

    });
});
