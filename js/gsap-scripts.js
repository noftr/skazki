ScrollTrigger.create({
    trigger: '.main-3s__text-container-1',
    animation: gsap.to('.main-3s__text-container-1', {scale: 10 }, {scale: 1}).fromTo('.main-3s__text-container-1', {scale: 1 }, {scale: 10}),
    toggleClass: 'active',
    scroller: ".scroll-wrapper",
    start: 'top 60%',
    end: 'top 40%',
    ease: "power4.out",
    markers: true,
    scrub: true
});
