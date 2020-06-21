var animationEnvelope__flap = document.getElementById("animationEnvelope__flap__path");

animationEnvelope__flap.addEventListener('click', function animateEnvelope() {
  
  let card = anime.timeline({
    duration: 0
  })

  card.add({
    targets: '#animationEnvelope__flap__path',
    d: [
      { value: 'M960,1494l960,-546.629v-200h-1920v200Z', duration: 10 },
      { value: 'M960,1600l960,-577v-276h-1920v276Z', duration: 200 },
      { value: 'M960,0l960,546.629v200h-1920v-200Z', duration: 600 }
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