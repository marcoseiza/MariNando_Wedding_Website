let hamburger = document.getElementById('nav');
let menu = document.getElementById('mobile_menu');
let close_menu = document.getElementById('close_menu');
let links = document.querySelectorAll('#mobile_menu li');


hamburger.addEventListener('click', function() {
  menu.style.display='grid';
});

close_menu.addEventListener('click', function() {
  menu.style.display='none';
});

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    menu.style.display='none';
  });
}