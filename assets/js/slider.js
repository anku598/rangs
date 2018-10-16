var paused = true;
var slider;
function switchSlider() {
  paused = !paused;
  if (!paused) {
    slider = new TuinSlider("#slider", {
      onLeave: function(index) {
        // Tween timeline object

        var tl = new TimelineMax();
        // Select elements in current slide,
        // if not the animation triggers for all elements
        var items = document.querySelectorAll(".slider__item");
        var item = items[index];

        // Animate title
        var splitImg = item.querySelectorAll(".split-img");

        // First slide = 0
        var first = item.querySelector(".first");

        // Second slide = 1
        var second = item.querySelector(".second");

        // Third slide = 2
        var third = item.querySelectorAll(".third");

        // Four slide = 3
        var four = item.querySelectorAll(".four");

        // Five slide = 4
        var five = item.querySelectorAll(".five");

        // Six slide = 5
        var six = item.querySelectorAll(".six");

        // Seven slide = 6
        var seven = item.querySelectorAll(".seven");

        // Seven slide = 6
        var eight = item.querySelectorAll(".eight");

        // Exit animations
        if (index === 0) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.1
          ).to(first, 0, {
            // x: 200,
            // opacity: 0,
            // ease: Power3.easeOut
          });
        }

        if (index === 1) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: 100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(second, 0, {
            // y: -100,
            // opacity: 0
          });
        }

        if (index === 2) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(third, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        if (index === 3) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(four, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        if (index === 4) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(five, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        if (index === 5) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(six, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        if (index === 6) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(seven, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        if (index === 7) {
          tl.staggerTo(
            splitImg,
            0,
            {
              // y: -100,
              // opacity: 0,
              // ease: Power3.easeOut
            },
            0.5
          ).to(eight, 0, {
            // x: 100,
            // opacity: 0
          });
        }

        return tl;
      },

      afterLoad: function(index) {
        // Tween timeline object
        var tl = new TimelineMax();
        // Select elements in current slide,
        // if not the animation triggers for all elements
        var items = document.querySelectorAll(".slider__item");
        var item = items[index];

        // Animate title every slide item
        var splitImg = item.querySelectorAll(".split-img");

        // Hide the content case click in between values dots
        // By example you are slide one and click slide third
        // this make hide the content in slide two
        var content = item.querySelector(".slider__content");
        TweenLite.set(content, {
          visibility: "visible"
        });

        // First slide = 0
        var first = item.querySelector(".first");
        var title = item.querySelector(".slide__title");
        var slide__desc = item.querySelector(".slide__desc");
        var slide__link = item.querySelector(".slide__link");

        // Second slide = 1
        var second = item.querySelector(".second");

        // Third slide = 2
        var third = item.querySelectorAll(".third");

        // Four slide = 3
        var four = item.querySelectorAll(".four");

        // Five slide = 4
        var five = item.querySelectorAll(".five");

        // Six slide = 5
        var six = item.querySelectorAll(".six");

        // Seven slide = 6
        var seven = item.querySelectorAll(".seven");

        // Seven slide = 7
        var eight = item.querySelectorAll(".eight");

        // Enter animations
        if (index === 0) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              first,
              1.25,
              {
                x: -100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 1) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              second,
              1.25,
              {
                x: 100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 2) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              third,
              1.25,
              {
                x: -100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 3) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              four,
              1.25,
              {
                x: 100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 4) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              five,
              1.25,
              {
                x: -100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 5) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              six,
              1.25,
              {
                x: 100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 6) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              seven,
              1.25,
              {
                x: -100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: -30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }

        if (index === 7) {
          tl.staggerFromTo(
            splitImg,
            1,
            {
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: Power3.easeOut
            },
            0.2
          )
            .fromTo(
              eight,
              1.25,
              {
                x: 100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              "-=0.6"
            )
            .fromTo(
              title,
              0.5,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              0.9
            )
            .fromTo(
              slide__desc,
              0.7,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1
            )
            .fromTo(
              slide__link,
              0.8,
              {
                x: 30,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                ease: Power3.easeOut
              },
              1.2
            );
        }
        paused = false;
        return tl;
      }
    });
  }
}

var isScrolling = false;


var last_known_scroll_position = 0;

function aboutScrollEvent(event) {
  if (!isScrolling) {
    console.log(isScrolling);
    isScrolling = true;
    if (event.deltaY > 50) {
      slider.moveToNext();
    } else if (event.deltaY < -50) {
      slider.moveToPrev();
    }
    window.setTimeout(function() {
      isScrolling = false;
    }, 1500);
    console.log(slider.index, "changing", isScrolling, event.deltaY);
  }
  last_known_scroll_position = window.scrollY;
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function scrollHandler(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
  disableScroll();
  if (!slider) {
    switchSlider();
  }
  enableScroll();
}

function disableScroll() {
  if (window.addEventListener) {
    // window.addEventListener('DOMMouseScroll', preventDefault, false);
    // window.addEventListener('scroll', preventDefault, false);
    window.addEventListener("DOMMouseScroll", scrollHandler, false);
    window.addEventListener("scroll", scrollHandler, false);
  }
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
  console.log("disabled");
}

function enableScroll() {
  if (window.removeEventListener) {
    // window.removeEventListener('DOMMouseScroll', preventDefault, false);
    // window.removeEventListener('scroll', preventDefault, false);
    window.removeEventListener("DOMMouseScroll", scrollHandler, false);
    window.removeEventListener("scroll", scrollHandler, false);
  }
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
  console.log("enabled");
}

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// window.addEventListener('wheel', function(){
//   if(!slider){
//     switchSlider();
//     window.scrollTo(0, window.innerHeight);
//   }
// });
