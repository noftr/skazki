ScrollTrigger.create({
    trigger: '.main-3s__text-container-1',
    animation:
    gsap.fromTo('.main-3s__text-container-1', {scale: 1 }, {scale: 10})
    .fromTo('.main-3s__text-container-1', {backgroundColor: "#ffffff"}, {backgroundColor: "#28a92b"}),
    scroller: ".scroll-wrapper",
    start: 'top 55%',
    end: 'bottom 45%',
    ease: "power4.out",
    markers: true,
    toggleActions: "play reverse play reverse",
});
