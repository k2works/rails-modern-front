# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
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
  return
