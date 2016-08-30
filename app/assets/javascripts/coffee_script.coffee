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

  $ ->
    $('.btn_tab1').on 'click', (e) ->
      $('#mytab a:first').tab 'show'
      return
    return
  $ ->
    $('.btn_tab2').on 'click', (e) ->
      $('#mytab li:eq(1) a').tab 'show'
      return
    return
  $ ->
    $('.btn_tab3').on 'click', (e) ->
      $('#mytab a:last').tab 'show'
      return
    return

  $ ->
    $('.btn_tab1').on 'click', (e) ->
      $('#mytab a:first').tab 'show'
      return
    return
  $ ->
    $('.btn_tab2').on 'click', (e) ->
      $('#mytab li:eq(1) a').tab 'show'
      return
    return
  $ ->
    $('.btn_tab3').on 'click', (e) ->
      $('#mytab a:last').tab 'show'
      return
    return
  $('#mytab2').on 'show.bs.tab', (e) ->
    fromTab = e.relatedTarget
    toTab = e.target
    if !confirm(fromTab.innerHTML + 'から' + toTab.innerHTML + 'に切り替えます。よろしいですか?')
      e.preventDefault()
    return

  $ ->
    $('.btn_collapse_show').on 'click', (e) ->
      $('#closepanel').collapse 'show'
      return
    return
  $ ->
    $('.btn_collapse_hide').on 'click', (e) ->
      $('#closepanel').collapse 'hide'
      return
    return
  $ ->
    $('#closepanel2').on 'hide.bs.collapse', (e) ->
      if !confirm('閉じてよろしいですか?')
        e.preventDefault()
      return
    return

  $ ->
    $('#mycarousel_left').on 'click', (e) ->
      $('#mycarousel').carousel 1
      return
    return

  $ ->
    $('#mycarousel3').on 'slide.bs.carousel', (e) ->
      if !confirm('切り替えても、よろしいですか?')
        $('#mycarousel2').carousel('pause');
        e.preventDefault()
      return
    return
