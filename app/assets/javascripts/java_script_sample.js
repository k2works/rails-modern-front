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

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton6").click(function () {
            // チェックボックスの値を取得
            var check = $("#check6").prop("checked");

            // 表示の分岐
            if (check) {
                $("#output6").val(
                    "ありがとうございます。サービスをご利用ください。"
                );
            } else {
                $("#output6").val(
                    "規約に同意しなければ、サービスは利用できません。"
                );
            }
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton7").click(function () {
            // 金額を取得
            var price = $("#userText7").val();

            // 値を数値にする
            price = parseInt(price);

            // NaNであるか確認
            if (isNaN(price)) {
                // NaNであるので「0」に書き換える。
                price = 0;
                $("#userText7").val(price);
            }

            // 表示の分岐
            if (price >= 1000) {
                $("#output7").text("1,000円以上なので、送料無料です。");
            } else {
                $("#output7").text("1,000円未満なので、送料は200円です。");
            }
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton8").click(function () {
            // 重量と個数の変数を初期化
            var weight = 0;      // 重量
            var count = 0;       // 個数

            // 重量と個数を加算していく
            if ($("#item1").prop("checked")) {
                weight += $("#item1").val() * 1;
                count += 1;
            }
            if ($("#item2").prop("checked")) {
                weight += $("#item2").val() * 1;
                count += 1;
            }
            if ($("#item3").prop("checked")) {
                weight += $("#item3").val() * 1;
                count += 1;
            }
            if ($("#item4").prop("checked")) {
                weight += $("#item4").val() * 1;
                count += 1;
            }
            // 表示の分岐
            if (weight >= 5) {
                if (count >= 2) {
                    $("#output8").text("5kg以上 2個以上なので送料は360円です。");
                } else {
                    $("#output8").text("送料は無料です。");
                }
            } else {
                $("#output8").text("送料は無料です。");
            }
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton8-2").click(function () {
            // 重量と個数の変数を初期化
            var count = 0;         // 個数
            var weight = 0;        // 重量

            // jQueryの「each()」関数を使って各チェックボックスを処理
            $("input[type='checkbox']").each(function () {
                // チェックボックスがチェックされているか確認
                if ($(this).prop("checked")) {
                    // チェックされているならば、個数を増やして重量を加算する
                    count += 1;
                    weight += $(this).val() * 1;
                }
            });

            // 表示の分岐
            if (weight >= 5 && count >= 2) {
                $("#output8").text("5kg以上 2個以上なので送料は360円です。");
            } else {
                $("#output8").text("送料は無料です。")
            }
        });
    });

    $(function () {
        // [送信]ボタンを押した時の処理を設定
        $("#submitButton9").click(function () {
            // 入力欄の値を取得
            var text1 = $("#userText9-1").val();
            var text2 = $("#userText9-2").val();
            var text3 = $("#userText9-3").val();

            // 入力確認
            var checkOk = true;
            if(text1 == "") checkOk = false;
            if(text2 == "") checkOk = false;
            if(text3 == "") checkOk = false;

            // 表示の分岐
            if (checkOk) {
                $("#output9").text("送信しました。");
                return true;
            } else {
                $("#output9").text("全て入力してください。");
                return false;
            }
        });
    });

    $(function () {
        // [送信]ボタンを押した時の処理を設定
        $("#submitButton9-2").click(function (e) {
            // 入力欄の値を取得
            var text1 = $("#userText9-1").val();
            var text2 = $("#userText9-2").val();
            var text3 = $("#userText9-3").val();

            // 入力確認
            var checkOk = true;
            if(text1 == "") checkOk = false;
            if(text2 == "") checkOk = false;
            if(text3 == "") checkOk = false;

            // 表示の分岐
            if (checkOk) {
                $("#output9").text("送信しました。");
            } else {
                $("#output9").text("全て入力してください。");
                e.preventDefault();
            }
        });
    });

    $(function () {
        // 時間の取得
        var d = new Date();
        var h = d.getHours();

        // 読み込む画像ファイルの名前用変数
        var fileName = "";

        // 時間による分岐
        if (0 <= h && h < 7) {
            fileName = "http://placehold.it/300/33cc66/000000";   // 夜
        } else if (7 <= h && h < 19) {
            fileName = "http://placehold.it/300/ff6666/000000"; // 朝
        } else if (12 <= h && h < 19) {
            fileName = "http://placehold.it/300/3366cc/000000"; // 昼
        } else if (19 <= h && h < 24) {
            fileName = "http://placehold.it/300/ffffff/000000";   // 夜
        }

        // img要素の作成
        var img = $("<img>");
        img.attr("src", fileName);

        // img要素の表示
        $("#timeBg").append(img);
    });

    $(function () {
        // cookieから訪問回数を取得
        var count = Cookies.get("VisitCount");
        if(count === undefined) count = 0;
        count = parseInt(count) + 1;

        // 訪問回数の表示
        $("#output10").text(count + "回目の訪問です。");

        // 訪問回数の記録
        Cookies.set("VisitCount", count, {expires: 7});

        // [リセット]ボタンを押した時の処理を設定
        $("#resetButton10").click(function () {
            // cookieの削除
            Cookies.remove("VisitCount");

            // 訪問回数の表示
            $("#output10").text("訪問回数をリセットしました。");
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton11").click(function () {
            // 文字列を取得
            var text = $("#userText11").val();

            // マークダウン記法変換
            text = markdown(text);

            // 文字列を出力
            $("#output11").val(text);

            // プレビューを表示
            $("#output11-2").html(text);

            // マークダウン記法変換関数(簡易)
            function markdown(argText) {
                // 強調
                argText = argText.replace(/\*(.+?)\*/g, "<b>$1</b>");

                // タイトル
                argText = argText.replace(/^## *(.+?)$/gm, "<h2>$1</h2>");
                argText = argText.replace(/^# *(.+?)$/gm, "<h1>$1</h1>");

                // 改行
                argText = argText.replace(/¥n/g, "<br>¥n")

                // 戻り値を戻して終了
                return argText;
            }
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton12").click(function () {
            // URLとタイトルを取得
            var title = $("#userTitle").val();
            var url = $("#userUrl").val();

            // リンクの作成
            makeLink(title, url);

            // リンクの作成
            function makeLink(argTitle, argUrl) {
                // DOMの作成
                var a = $("<a>");
                a.text(argTitle);
                a.attr("href", argUrl);

                // divで囲う
                var div = $("<div>").append(a);

                // 文字列を出力
                $("#output12").val(div.html());

                // リンクを出力
                $("#output12-2").html(a);
            }
        });
    });

    $(function () {
        // [実行]ボタンを押した時の処理を設定
        $("#execButton13").click(function () {
            // 文字列を取得
            var text = $("#userText13").val();

            // リンクに変換
            text = text.replace(/^(.+?),(.+?)$/gm, function (s, s1, s2) {
                return '<a href="' + s2 + '">' + s1 + '</a>';
            });

            // 改行を変換
            text = text.replace(/\n/g, "<br>\n");

            // 改行を出力
            $("#output13").val(text);

            // プレビュー
            $("#output13-2").html(text);
        });
    });

    $(function () {
        // マウスオーバー時の説明表示を追加
        $("a.link").hover(function () {
            // マウスが要素に乗った時の処理
            var ele = $(this);
            var title = ele.attr("title");
            $("#output14").val(title);
        }, function () {
            // マウスが要素から外れた時の処理
            $("#output14").val("");
        });
    });

    $(function () {
        // 状態遷移時の処理を設定
        $("#sel").change(function () {
            // 選択した項目の文字列を取得
            var text = $("#sel option:selected").text();

            // 文字列を表示
            $("#output14-2").text(text);
        });
    });

    $(function () {
        // [送信]ボタンを押した時の処理を設定
        $("#myForm").submit(function (e) {
            // 入力欄の値を取得
            var text = $("#userText14-3").val();

            // 表示の分位
            if (text != "") {
                $("#output14-3").text("送信しました。");
            } else {
                $("#output14-3").text("全て入力してください。");
                e.preventDefault();
            }
        });
    });

    $(function () {
        // スクロール時の処理
        $(window).scroll(function (e) {
            // ドキュメントの高さを取得
            var h = $(document).height();

            // 現在のスクロール位置を計算
            // (スクロールの上端とウインドウ高さの合計)
            var pos = $(window).scrollTop() + $(window).height();

            // 末尾か確認
            if (h == pos) {
                // 高さ1000pxの要素を追加
                $("body").append('<div style="height: 1000px;"></div>');
            }
        })
    })
});
