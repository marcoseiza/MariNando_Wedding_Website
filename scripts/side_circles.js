function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var scrolling = false;
var body_children = ['#home', '#details', '#schedule', '#travel_accommodations', '#follow', '#registry', '#contact'];
var circles = ['#circles_home', '#circles_details', '#circles_schedule', '#circles_travel_accommodations', '#circles_follow', '#circles_registry', '#circles_contact'];

for (var i = 0; i < body_children.length; i++) {
  $(circles[i]).hover(
    function(evt) {
      let target = evt.target
      target.style.fill = '#A3A3A3'
  }, function(evt) {
      let target = evt.target
      if (target.classList[0] != "circle_active") {
        target.style.fill = 'none'
      }
  })
}

$(window).scroll( function() {
  scrolling = true;
});
 
setInterval( function() {
  if (scrolling) {
    scrolling = false;

    let visible_elements = [];
    for (var i = 0; i < body_children.length; i++){
      $(circles[i]).css({ fill: "none" })
      $(circles[i]).removeClass('circle_active')
      if ($(body_children[i]).visible(true)) {
        visible_elements.push(i);
      }
    }

    if (arraysEqual(visible_elements, [4, 5, 6])) {
      visible_elements = [5, 6]
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      visible_elements = [6];
    }

    $(circles[visible_elements[0]]).css({ fill: "#A3A3A3" })
    $(circles[visible_elements[0]]).addClass('circle_active')
  }
}, 300 );



