
gsap.registerPlugin(ScrollTrigger);
const mediaQuery = window.matchMedia('(min-width: 992px)');
const scrollWrapper = document.querySelector('.scroll-wrapper');
const scrollView = document.querySelector('.scroll-view');
if (mediaQuery.matches && !window.disableScroll && scrollWrapper) {
  initLocomotiveScroll();
}
mediaQuery.addListener(() => window.location.reload());



function initLocomotiveScroll() {
  window.addEventListener('scroll', e => {
    console.log('scroll wrapper scroll', window.scrollY);
  });
  const locomotiveScroll = new LocomotiveScroll({
      el: scrollWrapper,
      smooth: true,
      lerp: is_touch_enabled() ? 0.054 : 0.1,
      touchMultiplier: 6.4, tablet: { smooth: true, },
      smartphone: { smooth: true, },
  });
  if (is_touch_enabled() && scrollView) {
      locomotiveScroll.on('scroll', args => window.scrollTo(0, args.scroll.y));
      scrollView.classList.add('-touchable');
  } else {
      console.log('touch event not found');
  }
  const onResizeContent = () => {
      console.log('RESIZE');
      locomotiveScroll.update();
      if (is_touch_enabled()) {
          document.body.style.height = locomotiveScroll.el.offsetHeight + 'px';
      }
  };
  new ResizeSensor(scrollWrapper, onResizeContent);
  setTimeout(() => onResizeContent, 300);
  locomotiveScroll.on("scroll", ScrollTrigger.update);
  window.addEventListener('load', onResizeContent);
  ScrollTrigger.scrollerProxy(scrollWrapper, {
      scrollTop(value) {
          return arguments.length ? locomotiveScroll.scrollTo(value, 0, 0) : locomotiveScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: scrollWrapper.style.transform ? "transform" : "fixed"
  });

  let trigger, number, icon, iconWrapper, photo, anchorArea, linkArea;

  const nationalities = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  nationalities.forEach((item, index) => {

      trigger = document.querySelectorAll('.main-3s__trigger')[index];
      number = document.querySelectorAll('.main-3s__number')[index];
      icon = document.querySelectorAll('.main-3s__icon')[index];
      iconWrapper = document.querySelectorAll('.main-3s__icon-wrapper')[index];
      photo = document.querySelectorAll('.main-3s__sticky-img')[index];
      anchorArea = document.querySelectorAll('.main-3s__anchor-area')[index];
      linkArea = document.querySelectorAll('.main-3s__link-area')[index];
      textComing = document.querySelectorAll('.main-3s__text-coming')[index];






      // fix bug with GSAP

      locomotiveScroll.on('scroll', (args) => {
          if(typeof args.currentElements['triggerSection'] === 'object') {
              let progress = args.currentElements['triggerSection'].progress;

              if (progress >= 0.9) {
                  console.log('aaaaaa');
                  nationalities.forEach((item, index) => {
                      document.querySelectorAll('.main-3s__sticky-img')[index].style.opacity = "0";
                  });
              } else if (progress <= 0.1){
                  console.log('aaaaaa');
                  nationalities.forEach((item, index) => {
                      document.querySelectorAll('.main-3s__sticky-img')[index].style.opacity = "0";
                  });
              }


          }
      });




      // on enter
      gsap.to(photo,{opacity: 1, duration: .001, ease: 'none',
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "restart none restart none",
          },});
      gsap.to(textComing,{color: "#FFEE50", duration: .6, ease: "power2.inOut",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "play reverse play reverse",
          },});
      gsap.to(linkArea,{color: "#FFEE50", duration: .6, ease: "power2.inOut",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "play reverse play reverse",
          },});
      gsap.to(number,{opacity: 1, duration: .001, ease: "power2.out",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "play reset play reset",
          },});
      gsap.to(icon, {xPercent: 100, duration: .6, ease: "power2.inOut",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "restart none restart none",
          },});
      gsap.to(linkArea,{pointerEvents: "auto", duration: .001,
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "play reset play reset",
          },});

      // on leave
      gsap.to(photo,{opacity: 0, duration: .001, ease: 'none',
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "reset play reset play",
          },});
      gsap.to(number,{opacity: 0, duration: .001, ease: "power2.out",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "reset play reset play",
          },});
      gsap.to(iconWrapper,{xPercent: 100, duration: .6, ease: "power2.inOut",
          scrollTrigger: {
              trigger: trigger,
              scroller: ".scroll-wrapper",
              start: 'top center',
              end: 'bottom center',
              toggleActions: "reset play reset play",
          },});

      anchorArea.addEventListener("click", scrollToEl);
      function scrollToEl() {
          locomotiveScroll.scrollTo(document.querySelectorAll('.main-3s__anchor')[index], {'duration': 500});
      };


      // fix bug with GSAP
      // ScrollTrigger.create({
      //   trigger: ".trigger__slide-is2",
      //   scroller: ".scroll-wrapper",
      //   start: 'top 0%',
      //   end: 'bottom 80%',
      //   onLeave: fixGsap,
      //   onLeaveBack: fixGsap,
      // });
      //
      // function fixGsap() {
      //     nationalities.forEach((item, index) => {
      //         document.querySelectorAll('.main-3s__sticky-img')[index].style.opacity = "0";
      //     });
      // }

  })

  function is_touch_enabled() {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  window.destroyLocomotiveScroll = function() {
    if (locomotiveScroll) {
      locomotiveScroll.destroy();
      scrollView.classList.remove('-touchable');
    }
  }











}

window.addEventListener('load', ()=>{
  const imagesWithLazyLoad = [...document.querySelectorAll("[loading='auto'], [loading='lazy']")]
  imagesWithLazyLoad.forEach(el=>{
    el.setAttribute('loading', 'eager')
  })
})

if(window.screen.width < 992) {

    let trigger, number, icon, iconWrapper, photo, anchorArea, linkArea;
    const nationalities = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

    nationalities.forEach((item, index) => {

        trigger = document.querySelectorAll('.main-3s__trigger')[index];
        photo = document.querySelectorAll('.main-3s__sticky-img')[index];
        anchorArea = document.querySelectorAll('.main-3s__anchor-area')[index];
        linkArea = document.querySelectorAll('.main-3s__link-area')[index];
        icon = document.querySelectorAll('.main-3s__mob-icon-container')[index];
        textComing = document.querySelectorAll('.main-3s__text-coming')[index];

        // on enter
        gsap.to(photo,{opacity: 1, duration: .001, ease: 'none',
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                toggleActions: "restart none restart none",
            },});
        gsap.to(linkArea,{color: "#FFEE50", duration: .2, ease: "power2.inOut",
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play reverse play reverse",
            },});
        gsap.to(textComing,{color: "#FFEE50", duration: .2, ease: "power2.inOut",
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play reverse play reverse",
            },});
        gsap.to(icon,{color: "#FFEE50", duration: .2, ease: "power2.inOut",
          scrollTrigger: {
              trigger: trigger,
              start: 'top center',
              end: 'bottom center',
              toggleActions: "play reverse play reverse",
          },});
        gsap.to(linkArea,{pointerEvents: "auto", duration: .001,
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play reset play reset",
            },});


        // on leave
        gsap.to(photo,{opacity: 0, duration: .001, ease: 'none',
            scrollTrigger: {
                trigger: trigger,
                start: 'top center',
                end: 'bottom center',
                toggleActions: "reset play reset play",
            },});



        // fix bug with GSAP
        // ScrollTrigger.create({
        //   trigger: ".trigger__slide-is2",
        //   start: 'top 0%',
        //   end: 'bottom 80%',
        //   onLeave: fixGsap,
        //   onLeaveBack: fixGsap,
        // });
        //
        // function fixGsap() {
        //     nationalities.forEach((item, index) => {
        //         document.querySelectorAll('.main-3s__sticky-img')[index].style.opacity = "0";
        //     });
        // }
        //
        //
        // anchorArea.addEventListener("click", scrollToEl);
        // function scrollToEl() {
        //     let anchorPoint = document.querySelectorAll('.main-3s__anchor')[index];
        //     anchorPoint.scrollIntoView({behavior: "smooth"});
        //
        // };
    })

}
