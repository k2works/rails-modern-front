$(document).on("turbolinks:load", function() {
    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton").click(function () {
            // 入力欄の値を取得
            var text = $("#userText").val();

            // 取得した値をdiv領域に表示
            $("#output").text(text);
        });
    });

    $(function () {
        // [取得]ボタンを押した時の処理を設定
        $("#getButton").click(function () {
            // HTMLの文字列を取得
            var text = $("#view").html();

            // 取得した文字列をテキストエリアに表示
            $("#userText2").val(text);
        });

        // [戻す]ボタンを押した時の処理を設定
        $("#backButton").click(function () {
            // テキストエリアの文字列を取得
            var text = $("#userText2").val();

            // 取得した文字列をdiv領域に表示
            $("#view").html(text)
        });
    });

    $(function () {
        // [計算]ボタンを押した時の処理を設定
        $("#calcButton").click(function () {
            // リストの値を取得
            var itemValue = $("#item option:selected").val();
            var numValue = $("#num option:selected").val();

            // リストの値を表示
            $("#itemSel").text(itemValue);
            $("#numSel").text(numValue);

            // 計算（掛け算）を行う
            var result = itemValue * numValue;

            // 端数を切り捨て
            result = Math.floor(result);

            // 計算結果を表示
            $("#result").text(result);
        });

        // 初回表示用にプログラムからクリック
        $("#calcButton").click();
    });

// DOMを準備後に実行する内容
    $(function () {
        // [干支を調べる]ボタンを押した時の処理を設定
        $("#calcButton2").click(function () {
            // 入力欄の値を取得
            var year = $("#year").val();

            // 干支の何番目かを計算
            var num = (year - 1900) % 12;

            // 計算結果を反映
            $("#orientalZodiac").val(num);
        })
    });

// DOMを準備後に実行する内容
    $(function () {
        // 1つ目のチェックボックスを押した時の処理を設定
        $("#check1").click(function () {
            // チェックボックスの値を取得
            var check1 = $("#check1").prop("checked");
            console.log(check1); // コンソールに出力

            // 取得した値をチェックボックスに設定
            $("#check2").prop("checked", check1);
        });

        // 1つ目のラジオボタンを押した時の処理を設定
        $("input[name=radio1]").click(function () {
            // ラジオボタンの値を取得
            var radio1 = $("input[name=radio1]:checked").val();
            console.log(radio1); // コンソールに出力

            // 取得した値をラジをボタンに設定
            $("input[name=radio2]").val([radio1]);
        });
    });

// DOMを準備後に実行する内容
    $(function () {
        // [表示サイズ取得]ボタンを押した時の処理を設定
        $("#execButton2").click(function () {
            // Webページのサイズを取得
            var w = $(window).width();       // ウィンドウの横幅を取得
            var h = $(window).height();      // ウィンドウの高さを取得

            // ボックスのサイズを計算
            var wBox = Math.floor(w / 5);  // 横幅
            var hBox = Math.floor(h / 5);  // 高さ

            // フォントのサイズを計算
            var fontSize = Math.floor(Math.min(w, h) / 20);

            // 新しい要素を作成して追加
            $("<div>")                             // div要素を作成
                .attr("class", "box")              // class属性に「box」を設定
                .css("font-size", fontSize)        // フォントサイズを設定
                .width(wBox)                       // 横幅を設定
                .height(hBox)                      // 高さを設定
                .append(w).append("x").append(h)   // 文字を追加
                .appendTo("#output2");              // 新しい要素を表示
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton3").click(function () {
            // 文字列を取得
            var text = $("#userText3").val();

            // 文字列の長さを出力
            $("#output3").text("文字列の長さは" + text.length + "です。");
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton3-2").click(function () {
            // 文字列を取得
            var text = $("#userText3-2").val();

            // 文字列の長話を計算
            var len = 0;
            for(var i = 0; i < text.length; i ++) {
                var c = text.charCodeAt(i);
                if ((c >= 0x0 && c < 0x81) || (c == 0xf8f0)
                || (c >= 0xff61 && c < 0xffa0)
                || (c >= 0xf8f1 && c < 0xf8f4)) {
                    len ++;
                } else {
                    len += 2;
                }
            }

            // 文字列の長さを出力
            $("#output3-2").text("文字列の長さは「" + len + "」です。");
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton4").click(function () {
            // 文字列を取得
            var text = $("#userText4").val();

            // タグの除去
            text = text.replace(/<.+?>/g, "");

            // 文字列を表示
            $("#output4").val(text);
        });
    });

    $(function () {
        // [エンコード]ボタンを押した時の処理を設定
        $("#encodeButton").click(function () {
            // 文字列を取得
            var text = $("#userText5").val();

            // エンコード
            text = encodeURI(text);

            // 文字列を表示
            $("#output5").val(text);
        });

        // [デコード]ボタンを押した時の処理を設定
        $("#decodeButton").click(function () {
            // 文字列を取得
            var text = $("#userText5").val()

            // デコード
            try {
                text = decodeURI(text);
            } catch(e) {
                console.log("error : " + e);
            }

            // 文字列を表示
            $("#output5").val(text);
        });
    });

    $(function () {
        // [移動]ボタンを押した時の処理を設定
        $("#moveButton").click(function () {
            // 文字列を取得
            var text = $('#userText6').val();

            // 移動
            location.href = text;
        });

        // [別ウィンドウで開く]ボタンを押した時の処理を設定
        $("#openButton").click(function () {
            // 文字列を取得
            var text = $("#userText6").val();

            // 別ウィンドウで開く
            window.open(text, "_blank")
        });
    });
});
