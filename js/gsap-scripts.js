ScrollTrigger.create({
    trigger: '.main-3s__text-container-1',
    animation: gsap.fromTo('.main-3s__text-container-1', {scale: 1 }, {scale: 10}),
    scroller: ".scroll-wrapper",
    start: 'top 60%',
    end: 'bottom 40%',
    ease: "power4.out",
    markers: true,
    toggleActions: "play reverse play reverse",
});
