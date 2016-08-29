$(document).on("turbolinks:load", function() {
    $('#myalert').on('close.bs.alert', function(e) {
        if(!confirm('閉じてよろしいですか？'))
        {
            e.preventDefault();
        }
    });
    $('#mymodal4').on('hide.bs.modal', function(e) {
        if(!confirm('閉じてよろしいですか？'))
        {
            e.preventDefault();
        }
    });

    $(function() {
        return $(".alert-close").click(function(e) {
            e.preventDefault();
            return $('#myalert').alert('close');
        });
    });

    $(function () {
        return $(".modal-show").click(function (e) {
            e.preventDefault();
            return $('#mymodal').modal('show');
        })
    });

    $(function () {
        return $(".modal-hide").click(function (e) {
            e.preventDefault();
            return $('#mymodal').modal('hide');
        })
    });
    $(function () {
        $('[data-toggle=tooltip').tooltip();
    });
    $(function () {
        return $(".tooltip-show").click(function (e) {
            return $('#mybutton').tooltip('show');
        })
    });

    $(function () {
        return $(".tooltip-hide").click(function (e) {
            return $('#mybutton').tooltip('hide');
        })
    });

    $(function () {
        $('[data-toggle=popover').popover();
    });

    var menus = ['メニュー1','メニュー2','メニュー3'];
    var menu_selected = {};

    $(function () {
        // ドロップダウンリストが開かれようとするときのイベント
        $('#mydropdown2').on('show.bs.dropdown', function (e) {
            var icon;
            var ul = $('#menulist');
            ul.empty();
            // メニューを動的に作成する
            $.each(menus, function(i) {
                icon = "";
                if (menu_selected[i]) {
                    icon = "<span class='glyphicon glyphicon-ok'></span>";
                }
                ul.append("<li role='presentation'>" +
                    "<a href='#' data-index='" + i +
                    "' tabindex='-1'>" + icon + this + "</a></li>");
            });
        });

        // メニュー項目がクリックされた時のイベント
        $('#menulist').on('click', function (e) {
            e.preventDefault();
            var index = $(e.target).attr('data-index');
            if(index !== undefined) {
                menu_selected[index] = menu_selected[index] ? false : true;
            }
        });
    });

    $(function () {
        $('#mybutton2').on('click', function (e) {
            var btn = $(this);
            btn.button('loading');
            // 話を簡単にするため2000ミリ秒後に実行するが、
            // 実際は、Ajaxの処理が終わった時などに呼び出すことになる
            setTimeout(function () {
                btn.button('reset');
            }, 2000);
        });
    });

});

$('.link-show-dropdown').on('mouseover', function(e) {
    $('#mylabel').dropdown('toggle');
});

