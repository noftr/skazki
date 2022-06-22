

gsap.fromTo('.main-3s__text-container-1', {scale: 1 }, {
    scale: 10,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.main-3s__text-container-1',
        // animation: animationCard,
        scroller: ".scroll-wrapper",
        start: 'top 55%',
        end: 'bottom 45%',
        ease: "power4.out",
        markers: true,
        toggleActions: "play reverse play reverse",
        // toggleClass: "active",
    };
});
