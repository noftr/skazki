ScrollTrigger.create({
    trigger: '.main-3s__text-container-1',
    animation: gsap.fromTo('.main-3s__text-container-1', {scale: 1 }, {scale: 10}),
    //  toggleClass: 'action',
    scroller: ".scroll-wrapper",
    start: '30% 0%',
  //  end: '1000% 0%',
    markers: true,
});
