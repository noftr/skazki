
let animTrigger = ScrollTrigger.create({
    trigger: '.main-3s__trigger-1',
    // animation: animationCard,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    ease: "power4.out",
    markers: true,
    toggleActions: "play reverse play reverse",
    // toggleClass: "active",
});


gsap.fromTo('.main-3s__text-container-1', { scale: 1 }, {
    scale: 10,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: animTrigger,
});



// gsap.fromTo('.main-3s__icon-1', { scale: 1 }, {
//     scale: 10,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: '.main-3s__trigger-1',
//         // animation: animationCard,
//         scroller: ".scroll-wrapper",
//         start: 'top 53%',
//         end: 'bottom 47%',
//         ease: "power4.out",
//         markers: true,
//         toggleActions: "play reverse play reverse",
//         // toggleClass: "active",
//     }
// });
