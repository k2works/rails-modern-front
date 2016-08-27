$(document).on "turbolinks:load", ->
  $('#myalert').on 'close.bs.alert', ->
    if(!confirm('閉じてよろしいですか？'))
      e.preventDefault()

  $ ->
  $(".alert-close").click (e) ->
    e.preventDefault()
    $('#myalert').alert('close')

