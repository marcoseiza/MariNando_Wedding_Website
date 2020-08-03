$('#player_button').mouseleave(function() {
  $(this).data('clicks', false);
  window.setTimeout(function() {
    $('#player_button .button_content > span').css({opacity: 1});
    $('#player_button .button_menu').css({opacity: 0});
    $('#player_button .button_menu').css({display: 'none'});
  }, 200)
})

$('#player_button').click(function(){
  var clicks = $(this).data('clicks');
  if (!clicks) {
    $('#player_button .button_content > span').css({opacity: 0});
    $('#player_button .button_menu').css({display: 'flex'});
    
    anime({
      targets: '#player_button .button_menu',
      opacity: 1,
      duration: 100,
      delay: 200,
      easing: 'easeInQuad'
    })
 } else {
    window.setTimeout(function() {
      $('#player_button .button_content > span').css({opacity: 1});
      $('#player_button .button_menu').css({opacity: 0});
      $('#player_button .button_menu').css({display: 'none'});
    }, 200)
 }
 $(this).data("clicks", !clicks);
})


$('#details_button').mouseleave(function() {
  $(this).data('clicks', false);
  window.setTimeout(function() {
    $('#details_button .button_content > span').css({opacity: 1});
    $('#details_button .button_menu').css({opacity: 0});
    $('#details_button .button_menu').css({display: 'none'});
  }, 200)
})

$('#details_button').click(function(){
  var clicks = $(this).data('clicks');
  if (!clicks) {
    $('#details_button .button_content > span').css({opacity: 0});
    $('#details_button .button_menu').css({display: 'flex'});

    anime({
      targets: '#details_button .button_menu',
      opacity: 1,
      duration: 100,
      delay: 200,
      easing: 'easeInQuad'
    })
 } else {
    window.setTimeout(function() {
      $('#details_button .button_content > span').css({opacity: 1});
      $('#details_button .button_menu').css({opacity: 0});
      $('#details_button .button_menu').css({display: 'none'});
    }, 200)
 }
 $(this).data("clicks", !clicks);
})