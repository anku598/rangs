var homeContent = document.querySelector('.home-content');
var bottomBtn = document.querySelector('.bottom-arrow');
var tl2 = new TimelineMax({delay:2});

tl2.from(homeContent, 1, {
  y: 40,
  autoAlpha: 0,
  ease: Cubic.easeInOut
}).from(bottomBtn, 1,{
  y: 20,
  autoAlpha: 0,
  ease: Cubic.easeInOut
})
