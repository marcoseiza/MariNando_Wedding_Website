var animationEnvelope__flap = document.getElementById("animationEnvelope__flap__path");
let URLparam = new URLSearchParams(window.location.search);

animationEnvelope__flap.addEventListener('click', function animateEnvelope() {
  
  let card = anime.timeline({
    duration: 0
  })

  card.add({
    targets: '#animationEnvelope__flap__path',
    d: [
      { value: 'M0 50 v15 L50 95 L100 65 v-15 Z', duration: 200 },
      { value: 'M0 50 v-15 L50 0 L100 35 v15 Z', duration: 300 },
      { value: 'M0 50 v-15 L50 10 L100 35 v15 Z', duration: 200 }
    ],
    easing: 'easeOutQuad',
    direction: 'normal'
  })

  card.add({
    targets: '.envelope',
    zIndex: 0,
    duration: 10
  }, '-=10')

  card.add({
    targets: '.animationEnvelope',
    translateY: '80vmin',
    duration: 600,
    easing: 'easeOutQuad'
  })

  card.add({
    targets: '.envelope',
    easing: 'easeOutQuad',
    height: '100vh',
    width: '100vw',
    duration: 500
  })

  card.add({
    targets: '.envelope__content',
    easing: 'easeOutQuad',
    opacity: 1,
    duration: 500
  })

  animationEnvelope__flap.removeEventListener('click', animateEnvelope)
})

window.setTimeout(function() {
  document.querySelector(".dummy").style.opacity = 1;
}, 5000)


let lang = window.navigator.userLanguage || window.navigator.language,
    en = (lang.includes("en"))? true: (lang.includes("es"))? false : true;

if (en) {
  document.getElementById("es").style.display = "none";
}
else {
  document.getElementById("en").style.display = "none";
  document.getElementById("openme").innerText = "Ábreme";
}

if (URLparam.get("form") == "1") {
  document.getElementById("en").href = "#form"
  document.getElementById("es").href = "#form"
}

function setCookie() {
  document.cookie = 'form=1'
}