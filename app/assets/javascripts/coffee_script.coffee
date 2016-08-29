$(document).on "turbolinks:load", ->
  $('#myalert').on 'close.bs.alert', ->
    if(!confirm('閉じてよろしいですか？'))
      e.preventDefault()

  $('#mymodal4').on 'hide.bs.modal', ->
    if(!confirm('閉じてよろしいですか？'))
      e.preventDefault()

  $ ->
  $(".alert-close").click (e) ->
    e.preventDefault()
    $('#myalert').alert('close')

  $ ->
  $(".modal-show").click (e) ->
    e.preventDefault()
    $('#mymodal').modal('show')

  $ ->
  $(".modal-hide").click (e) ->
    e.preventDefault()
    $('#mymodal').modal('hide')

  $ ->
  $(".modal-hide").click (e) ->
    $('[data-toggle=tooltip').tooltip()

  $ ->
    $('[data-toggle=tooltip').tooltip()

  $ ->
  $(".tooltip-show").click (e) ->
    $('#mybutton').tooltip('show')

  $ ->
  $(".tooltip-hide").click (e) ->
    $('#mybutton').tooltip('hide')

  $ ->
    $('[data-toggle=popover').popover()


  $('.link-show-dropdown').on 'mouseover', (e) ->
    $('#mylabel').dropdown 'toggle'
    return

  menus = [
    'メニュー1'
    'メニュー2'
    'メニュー3'
  ]
  menu_selected = {}
  $ ->
  # ドロップダウンリストが開かれようとするときのイベント
    $('#mydropdown2').on 'show.bs.dropdown', (e) ->
      icon = undefined
      ul = $('#menulist')
      ul.empty()
      # メニューを動的に作成する
      $.each menus, (i) ->
        icon = ''
        if menu_selected[i]
          icon = '<span class=\'glyphicon glyphicon-ok\'></span>'
        ul.append '<li role=\'presentation\'>' + '<a href=\'#\' data-index=\'' + i + '\' tabindex=\'-1\'>' + icon + this + '</a></li>'
        return
      return
    # メニュー項目がクリックされた時のイベント
    $('#menulist').on 'click', (e) ->
      e.preventDefault()
      index = $(e.target).attr('data-index')
      if index != undefined
        menu_selected[index] = if menu_selected[index] then false else true
      return
    return
  $ ->
    $('#mybutton2').on 'click', (e) ->
      btn = $(this)
      btn.button 'loading'
      # 話を簡単にするため2000ミリ秒後に実行するが、
      # 実際は、Ajaxの処理が終わった時などに呼び出すことになる
      setTimeout (->
        btn.button 'reset'
        return
      ), 2000
      return
    return
