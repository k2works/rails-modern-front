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
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton11').click ->
# 文字列を取得
      text = $('#userText11').val()
      # マークダウン記法変換
      # マークダウン記法変換関数(簡易)

      markdown = (argText) ->
# 強調
        argText = argText.replace(/\*(.+?)\*/g, '<b>$1</b>')
        # タイトル
        argText = argText.replace(/^## *(.+?)$/gm, '<h2>$1</h2>')
        argText = argText.replace(/^# *(.+?)$/gm, '<h1>$1</h1>')
        # 改行
        argText = argText.replace(/¥n/g, '<br>¥n')
        # 戻り値を戻して終了
        argText

      text = markdown(text)
      # 文字列を出力
      $('#output11').val text
      # プレビューを表示
      $('#output11-2').html text
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton12').click ->
# URLとタイトルを取得
      title = $('#userTitle').val()
      url = $('#userUrl').val()
      # リンクの作成
      # リンクの作成

      makeLink = (argTitle, argUrl) ->
# DOMの作成
        a = $('<a>')
        a.text argTitle
        a.attr 'href', argUrl
        # divで囲う
        div = $('<div>').append(a)
        # 文字列を出力
        $('#output12').val div.html()
        # リンクを出力
        $('#output12-2').html a
        return

      makeLink title, url
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton13').click ->
# 文字列を取得
      text = $('#userText13').val()
      # リンクに変換
      text = text.replace(/^(.+?),(.+?)$/gm, (s, s1, s2) ->
        '<a href="' + s2 + '">' + s1 + '</a>'
      )
      # 改行を変換
      text = text.replace(/\n/g, '<br>\n')
      # 改行を出力
      $('#output13').val text
      # プレビュー
      $('#output13-2').html text
      return
    return
  $ ->
# マウスオーバー時の説明表示を追加
    $('a.link').hover (->
# マウスが要素に乗った時の処理
      ele = $(this)
      title = ele.attr('title')
      $('#output14').val title
      return
    ), ->
# マウスが要素から外れた時の処理
      $('#output14').val ''
      return
    return
  $ ->
# 状態遷移時の処理を設定
    $('#sel').change ->
# 選択した項目の文字列を取得
      text = $('#sel option:selected').text()
      # 文字列を表示
      $('#output14-2').text text
      return
    return
  $ ->
# [送信]ボタンを押した時の処理を設定
    $('#myForm').submit (e) ->
# 入力欄の値を取得
      text = $('#userText14-3').val()
      # 表示の分位
      if text != ''
        $('#output14-3').text '送信しました。'
      else
        $('#output14-3').text '全て入力してください。'
        e.preventDefault()
      return
    return
  $ ->
# スクロール時の処理
    $(window).scroll (e) ->
# ドキュメントの高さを取得
      h = $(document).height()
      # 現在のスクロール位置を計算
      # (スクロールの上端とウインドウ高さの合計)
      pos = $(window).scrollTop() + $(window).height()
      # 末尾か確認
      if h == pos
# 高さ1000pxの要素を追加
        $('body').append '<div style="height: 1000px;"></div>'
      return
    return
  $ ->
# クリック数
    count = 0
    # 紹介文
    messages = [
      '(1)「技評タブレット」の特徴を紹介します。'
      '(2)本商品は弊社コンテンツ閲覧専用タブレットです。'
      '(3)過去の書籍を全て読めます。'
      '(4)また、今後発売する書籍も安価で閲覧可能です。'
    ]
    # [実行]ボタンを押した時の処理を設定
    $('#execButton15').click ->
# 配列の値を読み込む
      text = messages[count]
      # 文字列を出力
      $('#output15').val text
      # クリック数の更新
      count++
      # クリック数が配列数以上なら[0]に戻す
      if count >= messages.length
        count = 0
      return
    return
  $ ->
# [実行]ボタンを押した時の処理を設定
    $('#execButton16').click ->
# 文字列を取得
      text = $('#userText16').val()
      # 配列に変換
      arr = text.split(' ')
      # リストの格納先を作成
      ul = $('<ul>')
      # リストを作成
      i = 0
      while i < arr.length
        li = $('<li>')
        li.text arr[i]
        ul.append li
        i++
      # 文字列を出力
      div = $('<div>').append(ul)
      $('#output16').val div.html()
      # Webページにリストを表示
      $('#output16-2').html ul
      return
    return
  $ ->
# 変数「count」を初期化する
    count = 0
    # 定期処理を開始する
    id = setInterval((->
# 画像を全て非表示にする
      $('#animImg > img').hide()
      # 変数「count」番目の画像だけ表示状態にする
      $('#animImg > img').eq(count).show()
      # 変数「count」を1増やす
      count++
      # 変数「count」を3の場合は「0」に戻す
      count = count % 3
      return
    ), 500)
    # [停止]ボタンを押した時の処理を設定
    $('#execButton17').click ->
# 定期処理を解除
      clearInterval id
      return
    return
  $ ->
# 対応の確認
    if !window.File or !window.FileReader or !window.FileList or !window.Blob
      return
    # ファイル選択変更時の処理を設定
    $('#fileButton18').change (event) ->
# 変更されたファイル情報の一覧を配列として取得
      files = event.target.files
      # ファイル情報を1つずつ得て処理していく
      i = 0
      while i < files.length
# ファイル情報を1つ取得
        f = files[i]
        # ファイル情報を出力
        console.log 'ファイル名:' + f.name
        console.log '種類:' + f.type
        console.log 'サイズ:' + f.size
        # ファイル読み取り用の「FileReader」を作成
        reader = new FileReader
        # ファイル読み取り完了時のイベント

        reader.onload = (e) ->
          `var i`
          # 文字列取得
          text = e.target.result
          # 行数を追加
          arr = text.split('\n')
          i = 0
          while i < arr.length
            arr[i] = i + ' : ' + arr[i]
            i++
          text = arr.join('\n')
          # 文字列を表示
          $('#output18').val text
          return

        # テキストとして読み込む
        reader.readAsText f, 'shift-jis'
        i++
      return
    $ ->
# 対応の確認
      if !window.File or !window.FileReader or !window.FileList or !window.Blob
        return
      # 通常のイベントをキャンセルする関数

      cancelEvent = (event) ->
        event.preventDefault()
        event.stopPropagation()
        return

      # ファイルを読み込む関数

      dropFileEvent = (event) ->
# 通常のイベントのキャンセル
        cancelEvent event
        # ファイル一覧の取得
        files = event.originalEvent.dataTransfer.files
        # 各ファイルに対して処理を実施
        i = 0
        while i < files.length
# ファイルの取得
          f = files[i]
          # ファイルの読み取り
          reader = new FileReader
          # 読み取り完了時のイベントを登録

          reader.onload = (e) ->
# Data URL形式のデータを取り出す
            text = e.target.result
            # img要素を作成
            img = $('<img>')
            img.attr 'src', text
            # 画像を表示
            $('#output19').append img
            return

          # Data URL形式で読み取り
          reader.readAsDataURL f
          i++
        return

      # イベントの設定
      $('#drop').on
        'dragenter': cancelEvent
        'dragover': cancelEvent
        'dragleave': cancelEvent
        'drop': dropFileEvent
      return
    $ ->
# [実行]ボタンを押した時の処理を設定
      $('#execButton20').click ->
# 文字列を取得
        text = $('#userText20').val()
        # トリム
        text = text.trim()
        # 配列に変換
        arr = text.split('\n')
        # ソート
        arr.sort (a, b) ->
# 各要素をカンマ区切りで配列化
          nameA = a.split(',')[1]
          nameB = b.split(',')[1]
          # 読みの値を比較
          if nameA < nameB
            return -1
          if nameA > nameB
            return 1
          0
        # 配列を結合
        text = arr.join('\n')
        # 文字列を出力
        $('#output20').val text
        return
      return
    return
  return
