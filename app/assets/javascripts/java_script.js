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

    $('.link-show-dropdown').on('mouseover', function(e) {
        $('#mylabel').dropdown('toggle');
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

    $(function () {
        $('.btn_tab1').on('click', function (e) {
            $('#mytab a:first').tab('show');
        })
    });
    $(function () {
        $('.btn_tab2').on('click', function (e) {
            $('#mytab li:eq(1) a').tab('show');
        })
    });
    $(function () {
        $('.btn_tab3').on('click', function (e) {
            $('#mytab a:last').tab('show');
        })
    });

    $('#mytab2').on('show.bs.tab', function (e) {
        var fromTab = e.relatedTarget;
        var toTab = e.target;

        if(!confirm(
            fromTab.innerHTML + 'から' + toTab.innerHTML +
            'に切り替えます。よろしいですか?'))
        {
            e.preventDefault();
        }
    });

    $(function () {
        $('.btn_collapse_show').on('click', function (e) {
            $('#closepanel').collapse('show');
        })
    });

    $(function () {
        $('.btn_collapse_hide').on('click', function (e) {
            $('#closepanel').collapse('hide');
        })
    });

    $(function () {
        $('#closepanel2').on('hide.bs.collapse', function(e) {
            if(!confirm('閉じてよろしいですか?')) {
                e.preventDefault();
            }
        });
    });

    $(function () {
        $('.mycarousel_left').on('click', function (e) {
            $('#mycarousel').carousel(1);
        });
    });

    $(function () {
        $('#mycarousel2').on('slide.bs.carousel', function (e) {
            if(!confirm('切り替えても、よろしいですか?')) {
                $('#mycarousel2').carousel('pause');
                e.preventDefault();
            }
        });
    });

});


