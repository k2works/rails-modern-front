$(document).on("turbolinks:load", function() {
    function setMyForm(target){

        var ERROR_MESSAGE_CLASSNAME = 'errorMsg';
        var ERROR_INPUT_CLASSNAME = 'errorInput';

        var items = [];

        var checkAll = function(){
            var errorCount = 0;
            checkEmptyText( items[0], '名前をご入力ください。');
            if( items[0].prop('isSuccess')) checkFormatText( items[0], 0, '入力フォーマットが正しくありません。');
            checkEmptyText( items[1], 'ふりがなをご入力ください。');
            if( items[1].prop('isSuccess')) checkFormatText( items[1], 0, '入力フォーマットが正しくありません。');
            checkEmptyText( items[2], '電話番号をご入力ください。');
            if( items[2].prop('isSuccess')) checkFormatText( items[2], 0, '入力フォーマットが正しくありません。');
            checkEmptyText( items[3], 'メールアドレスをご入力ください。');
            if( items[3].prop('isSuccess')) checkFormatText( items[3], 0, '入力フォーマットが正しくありません。');
            checkEmptyText( items[4], 'お問い合わせ内容をご入力ください。');
            for( var i=0; i<items.length; i++){
                if( items[i].prop('isSuccess') == false ){
                    errorCount++;
                }
            }
            if( errorCount == 0){
                alert('送信内容にエラーはありません。');
            }
        };

        function checkFormatText(selector, mode, msg){
            var value = selector.val();
            switch(mode){
                //全角のみ
                case 0:
                    if(value.match(/^[^ -~｡-ﾟ]*$/)) {
                        selector.prop('isSuccess', true);
                    }else{
                        selector.prop('isSuccess', false);
                    }
                    break;
                //ふりがなのみ
                case 1:
                    if(value.match(/^[\u3040-\u309F]+$/)){
                        selector.prop('isSuccess', true);
                    }else{
                        selector.prop('isSuccess', false);
                    }
                    break;
                //半角数字のみ
                case 2:
                    if(value.match(/^[0-9]*$/)){
                        selector.prop('isSuccess', true);
                    }else{
                        selector.prop('isSuccess', false);
                    }
                    break;
                //メールアドレスかどうか
                case 3:
                    if(value.match(/^[a-zA-Z0-9!$&*.=^'|~#%'+\/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}$/)){
                        selector.prop('isSuccess', true);
                    }else{
                        selector.prop('isSuccess', false);
                    }
                    break;
            }
            if(selector.prop('isSuccess') == false ){
                addErrorMessage(selector, msg);
            }else{
                removeErrorMessage(selector);
            }
        }

        var addErrorMessage = function(selector, msg){
            removeErrorMessage(selector);
            selector.before('<span class="'+ERROR_MESSAGE_CLASSNAME+'">'+msg+'</span>');
            selector.addClass(ERROR_INPUT_CLASSNAME);
        };

        var removeErrorMessage = function(selector){
            var msgSelector = selector.parent().find('.'+ERROR_MESSAGE_CLASSNAME);
            if( msgSelector.length != 0){
                msgSelector.remove();
                selector.removeClass(ERROR_INPUT_CLASSNAME);
            }
        };

        var checkEmptyText = function (selector, msg) {
            if( selector.val() == ''){
                addErrorMessage(selector, msg);
                selector.prop('isSuccess', false);
            }else{
                removeErrorMessage(selector);
                selector.prop('isSuccess', true);
            }
        };

        var init = function(){
            target.on({
                'submit': function () {
                    checkAll();
                    return false;
                }
            });

            items = [
                target.find('input[name=formName]'),
                target.find('input[name=formFurigana]'),
                target.find('input[name=formTell]'),
                target.find('input[name=formMail]'),
                target.find('textarea[name=formInquiry]')
            ];

            $.each(items, function(index){
                items[index].prop('isSuccess', false);
            });
            target.find('input[type=text]').on({
                'keypress': function (e) {
                    if( (e.keyCode == 13)) return false;
                }
            });
        };

        init();

    }

    setMyForm($('#myForm'));

});
