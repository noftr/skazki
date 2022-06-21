ScrollTrigger.create({
    trigger: '.main-3s__text-container-1',
    animation: gsap.fromTo('.main-3s__text-container-1', {scale: 1 }, {scale: 10}), gsap.to('.main-3s__text-container-1', {scale: 10 }, {scale: 1}),
    toggleClass: 'active',
    scroller: ".scroll-wrapper",
    start: 'top 60%',
    end: 'top 40%',
    markers: true,
});
