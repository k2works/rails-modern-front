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

