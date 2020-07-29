$('#player_button').focusout(function() {
  window.setTimeout(function() {
    $('#player_button .button_content > span').css({opacity: 1});
    $('#player_button .button_menu').css({opacity: 0});
    $('#player_button .button_menu').css({display: 'none'});
  }, 200)
})

$('#player_button').focus(function(){
  $('#player_button .button_content > span').css({opacity: 0});
  $('#player_button .button_menu').css({display: 'flex'});
  
  anime({
    targets: '#player_button .button_menu',
    opacity: 1,
    duration: 100,
    delay: 200,
    easing: 'easeInQuad'
  })
})


$('#details_button').focusout(function() {
  window.setTimeout(function() {
    $('#details_button .button_content > span').css({opacity: 1});
    $('#details_button .button_menu').css({opacity: 0});
    $('#details_button .button_menu').css({display: 'none'});
  }, 200)
})

$('#details_button').focus(function(){
  $('#details_button .button_content > span').css({opacity: 0});
  $('#details_button .button_menu').css({display: 'flex'});

  anime({
    targets: '#details_button .button_menu',
    opacity: 1,
    duration: 100,
    delay: 200,
    easing: 'easeInQuad'
  })
})