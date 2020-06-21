$('#player_button').click(function(){
  var clicks = $(this).data('clicks_player_button');
  if (!clicks) {
    $('#player_button .button_menu').css({overflow: 'visible', height: 'auto'})
    $('#player_button .button_menu a').css({display: 'flex'})
    
    anime({
      targets: '#player_button .button_menu a',
      opacity: 1,
      duration: 100,
      easing: 'easeInQuad'
    })

  } else {
    $('#player_button .button_menu').css({overflow: 'hidden', height: 0})
    $('#player_button .button_menu a').css({display: 'flex', opacity: 0})
  }
  $(this).data("clicks_player_button", !clicks);
})

$('#details_button').click(function(){
  var clicks = $(this).data('clicks_details_button');
  if (!clicks) {
    $('#details_button .button_menu').css({overflow: 'visible', height: 'auto'})
    $('#details_button .button_menu a').css({display: 'flex'})
    
    anime({
      targets: '#details_button .button_menu a',
      opacity: 1,
      duration: 100,
      easing: 'easeInQuad'
    })

  } else {
    $('#details_button .button_menu').css({overflow: 'hidden', height: 0})
    $('#details_button .button_menu a').css({display: 'flex', opacity: 0})
  }
  $(this).data("clicks_details_button", !clicks);
})