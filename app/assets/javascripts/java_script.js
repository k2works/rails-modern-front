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
});
