$('#tab').hover(function() {
  let t = $('.details__date__detes .content')
  if(parseInt(t.css("left")) <= 0) {
    t.addClass('over');
  }
}, function() {
  $(".details__date__detes .content").removeClass('over');
})

function close() {
  let t = $('.details__date__detes .content');
  t.css("left", "0");
  window.setTimeout(function() {
    t.find("#tab span").text("CLICK ME");
  }, 200) 
}

function tap() {
  let t = $('.details__date__detes .content');

  if(parseInt(t.css("left")) <= t.width() / 2) {

    t.removeClass('over');
    t.css("left", $(".details__date__detes__basic").outerWidth());

    window.setTimeout(function() {
      t.find("#tab span").text("CLOSE ME");
    }, 200)

  } else if(parseInt(t.css("left")) >= t.width() / 2) {

    t.css("left", "0");

    window.setTimeout(function() {
      t.find("#tab span").text("CLICK ME");
      t.blur()
    }, 200) 
  }
}


$('html').click(close);
$('#tab').click(function(e){
  e.stopPropagation();
  tap()
});

$('html').on('touchstart', close)
$(".tab").on('touchstart',function(e) {
  e.stopPropagation();
  tap()
});



