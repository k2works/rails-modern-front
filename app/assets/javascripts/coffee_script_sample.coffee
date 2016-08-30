$(document).on 'turbolinks:load', ->
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton').click ->
# 入力欄の値を取得
      text = $('#userText').val()
      # 取得した値をdiv領域に表示
      $('#output').text text
      return
    return
  $ ->
# [取得]ボタンを押した時の処理を設定
    $('#getButton').click ->
# HTMLの文字列を取得
      text = $('#view').html()
      # 取得した文字列をテキストエリアに表示
      $('#userText2').val text
      return
    # [戻す]ボタンを押した時の処理を設定
    $('#backButton').click ->
# テキストエリアの文字列を取得
      text = $('#userText2').val()
      # 取得した文字列をdiv領域に表示
      $('#view').html text
      return
    return
  $ ->
# [計算]ボタンを押した時の処理を設定
    $('#calcButton').click ->
# リストの値を取得
      itemValue = $('#item option:selected').val()
      numValue = $('#num option:selected').val()
      # リストの値を表示
      $('#itemSel').text itemValue
      $('#numSel').text numValue
      # 計算（掛け算）を行う
      result = itemValue * numValue
      # 端数を切り捨て
      result = Math.floor(result)
      # 計算結果を表示
      $('#result').text result
      return
    # 初回表示用にプログラムからクリック
    $('#calcButton').click()
    return
  # DOMを準備後に実行する内容
  $ ->
# [干支を調べる]ボタンを押した時の処理を設定
    $('#calcButton2').click ->
# 入力欄の値を取得
      year = $('#year').val()
      # 干支の何番目かを計算
      num = (year - 1900) % 12
      # 計算結果を反映
      $('#orientalZodiac').val num
      return
    return
  # DOMを準備後に実行する内容
  $ ->
# 1つ目のチェックボックスを押した時の処理を設定
    $('#check1').click ->
# チェックボックスの値を取得
      check1 = $('#check1').prop('checked')
      console.log check1
      # コンソールに出力
      # 取得した値をチェックボックスに設定
      $('#check2').prop 'checked', check1
      return
    # 1つ目のラジオボタンを押した時の処理を設定
    $('input[name=radio1]').click ->
# ラジオボタンの値を取得
      radio1 = $('input[name=radio1]:checked').val()
      console.log radio1
      # コンソールに出力
      # 取得した値をラジをボタンに設定
      $('input[name=radio2]').val [ radio1 ]
      return
    return
  # DOMを準備後に実行する内容
  $ ->
# [表示サイズ取得]ボタンを押した時の処理を設定
    $('#execButton2').click ->
# Webページのサイズを取得
      w = $(window).width()
      # ウィンドウの横幅を取得
      h = $(window).height()
      # ウィンドウの高さを取得
      # ボックスのサイズを計算
      wBox = Math.floor(w / 5)
      # 横幅
      hBox = Math.floor(h / 5)
      # 高さ
      # フォントのサイズを計算
      fontSize = Math.floor(Math.min(w, h) / 20)
      # 新しい要素を作成して追加
      $('<div>').attr('class', 'box').css('font-size', fontSize).width(wBox).height(hBox).append(w).append('x').append(h).appendTo '#output2'
      # 新しい要素を表示
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton3').click ->
# 文字列を取得
      text = $('#userText3').val()
      # 文字列の長さを出力
      $('#output3').text '文字列の長さは' + text.length + 'です。'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton3-2').click ->
# 文字列を取得
      text = $('#userText3-2').val()
      # 文字列の長話を計算
      len = 0
      i = 0
      while i < text.length
        c = text.charCodeAt(i)
        if c >= 0x0 and c < 0x81 or c == 0xf8f0 or c >= 0xff61 and c < 0xffa0 or c >= 0xf8f1 and c < 0xf8f4
          len++
        else
          len += 2
        i++
      # 文字列の長さを出力
      $('#output3-2').text '文字列の長さは「' + len + '」です。'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton4').click ->
# 文字列を取得
      text = $('#userText4').val()
      # タグの除去
      text = text.replace(/<.+?>/g, '')
      # 文字列を表示
      $('#output4').val text
      return
    return
  $ ->
# [エンコード]ボタンを押した時の処理を設定
    $('#encodeButton').click ->
# 文字列を取得
      text = $('#userText5').val()
      # エンコード
      text = encodeURI(text)
      # 文字列を表示
      $('#output5').val text
      return
    # [デコード]ボタンを押した時の処理を設定
    $('#decodeButton').click ->
# 文字列を取得
      text = $('#userText5').val()
      # デコード
      try
        text = decodeURI(text)
      catch e
        console.log 'error : ' + e
      # 文字列を表示
      $('#output5').val text
      return
    return
  $ ->
# [移動]ボタンを押した時の処理を設定
    $('#moveButton').click ->
# 文字列を取得
      text = $('#userText6').val()
      # 移動
      location.href = text
      return
    # [別ウィンドウで開く]ボタンを押した時の処理を設定
    $('#openButton').click ->
# 文字列を取得
      text = $('#userText6').val()
      # 別ウィンドウで開く
      window.open text, '_blank'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton6').click ->
# チェックボックスの値を取得
      check = $('#check6').prop('checked')
      # 表示の分岐
      if check
        $('#output6').val 'ありがとうございます。サービスをご利用ください。'
      else
        $('#output6').val '規約に同意しなければ、サービスは利用できません。'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton7').click ->
# 金額を取得
      price = $('#userText7').val()
      # 値を数値にする
      price = parseInt(price)
      # NaNであるか確認
      if isNaN(price)
# NaNであるので「0」に書き換える。
        price = 0
        $('#userText7').val price
      # 表示の分岐
      if price >= 1000
        $('#output7').text '1,000円以上なので、送料無料です。'
      else
        $('#output7').text '1,000円未満なので、送料は200円です。'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton8').click ->
# 重量と個数の変数を初期化
      weight = 0
      # 重量
      count = 0
      # 個数
      # 重量と個数を加算していく
      if $('#item1').prop('checked')
        weight += $('#item1').val() * 1
        count += 1
      if $('#item2').prop('checked')
        weight += $('#item2').val() * 1
        count += 1
      if $('#item3').prop('checked')
        weight += $('#item3').val() * 1
        count += 1
      if $('#item4').prop('checked')
        weight += $('#item4').val() * 1
        count += 1
      # 表示の分岐
      if weight >= 5
        if count >= 2
          $('#output8').text '5kg以上 2個以上なので送料は360円です。'
        else
          $('#output8').text '送料は無料です。'
      else
        $('#output8').text '送料は無料です。'
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton8-2').click ->
# 重量と個数の変数を初期化
      count = 0
      # 個数
      weight = 0
      # 重量
      # jQueryの「each()」関数を使って各チェックボックスを処理
      $('input[type=\'checkbox\']').each ->
# チェックボックスがチェックされているか確認
        if $(this).prop('checked')
# チェックされているならば、個数を増やして重量を加算する
          count += 1
          weight += $(this).val() * 1
        return
      # 表示の分岐
      if weight >= 5 and count >= 2
        $('#output8').text '5kg以上 2個以上なので送料は360円です。'
      else
        $('#output8').text '送料は無料です。'
      return
    return
  $ ->
# [送信]ボタンを押した時の処理を設定
    $('#submitButton9').click ->
# 入力欄の値を取得
      text1 = $('#userText9-1').val()
      text2 = $('#userText9-2').val()
      text3 = $('#userText9-3').val()
      # 入力確認
      checkOk = true
      if text1 == ''
        checkOk = false
      if text2 == ''
        checkOk = false
      if text3 == ''
        checkOk = false
      # 表示の分岐
      if checkOk
        $('#output9').text '送信しました。'
        true
      else
        $('#output9').text '全て入力してください。'
        false
    return
  $ ->
# [送信]ボタンを押した時の処理を設定
    $('#submitButton9-2').click (e) ->
# 入力欄の値を取得
      text1 = $('#userText9-1').val()
      text2 = $('#userText9-2').val()
      text3 = $('#userText9-3').val()
      # 入力確認
      checkOk = true
      if text1 == ''
        checkOk = false
      if text2 == ''
        checkOk = false
      if text3 == ''
        checkOk = false
      # 表示の分岐
      if checkOk
        $('#output9').text '送信しました。'
      else
        $('#output9').text '全て入力してください。'
        e.preventDefault()
      return
    return
  $ ->
# 時間の取得
    d = new Date
    h = d.getHours()
    # 読み込む画像ファイルの名前用変数
    fileName = ''
    # 時間による分岐
    if 0 <= h and h < 7
      fileName = 'http://placehold.it/300/33cc66/000000'
# 夜
    else if 7 <= h and h < 19
      fileName = 'http://placehold.it/300/ff6666/000000'
# 朝
    else if 12 <= h and h < 19
      fileName = 'http://placehold.it/300/3366cc/000000'
# 昼
    else if 19 <= h and h < 24
      fileName = 'http://placehold.it/300/ffffff/000000'
    # 夜
    # img要素の作成
    img = $('<img>')
    img.attr 'src', fileName
    # img要素の表示
    $('#timeBg').append img
    return
  $ ->
# cookieから訪問回数を取得
    count = Cookies.get('VisitCount')
    if count == undefined
      count = 0
    count = parseInt(count) + 1
    # 訪問回数の表示
    $('#output10').text count + '回目の訪問です。'
    # 訪問回数の記録
    Cookies.set 'VisitCount', count, expires: 7
    # [リセット]ボタンを押した時の処理を設定
    $('#resetButton10').click ->
# cookieの削除
      Cookies.remove 'VisitCount'
      # 訪問回数の表示
      $('#output10').text '訪問回数をリセットしました。'
      return
    return
  return
