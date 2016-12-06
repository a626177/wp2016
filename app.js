$('#ajax').click(() => {
  $.get('ajax.njs', (it) => {
    $('p').html(it)
  })
  setTimeout(() => $('p').html('loading'), 2250)
})
