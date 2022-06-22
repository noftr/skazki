let animTrigger = ScrollTrigger.create({
    trigger: '.main-3s__trigger-1',
    // animation: animationCard,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reverse play reverse",
    onEnter: onEnterFunc1,
    onEnterBack: onEnterFunc1,
    onLeave: onLeaveFunc1,
    onLeaveBack: onLeaveFunc1,
});

function onEnterFunc1() {
    gsap.to('.main-3s__text-container-1',{
        color: "#FFEE50",
        duration: .4,
        ease: "power3.inOut",
    });
    gsap.to('.main-3s__number-1',{
        opacity: 1,
        delay: .1,
        duration: .3,
        ease: "power3.out",
    });
    gsap.fromTo(".main-3s__icon-1", {xPercent: 0}, {xPercent: 100, duration: .6, ease: "power3.inOut",});
    gsap.fromTo(".main-3s__head-wrapper-1", {yPercent: 0}, {xPercent: 100, duration: 1, ease: "power3.inOut",});
};

function onLeaveFunc1() {
    gsap.to('.main-3s__text-container-1',{
        color: "#FFFFFF",
        duration: .4,
        ease: "power3.inOut",
    });
    gsap.to('.main-3s__number-1',{
        opacity: 0,
        delay: .1,
        duration: .3,
        ease: "power3.out",
    });
    gsap.to(".main-3s__icon-1", {xPercent: 200, duration: .6, ease: "power3.inOut",});
    gsap.fromTo(".main-3s__head-wrapper-1", {yPercent: 0}, {xPercent: 100, duration: 1, ease: "power3.inOut",});
};




// gsap.fromTo('.main-3s__icon-1', { scale: 1 }, {
//     scale: 10,
//     duration: 1,
//     ease: "power2.inOut",
//     scrollTrigger: {
//         trigger: '.main-3s__trigger-1',
//         // animation: animationCard,
//         scroller: ".scroll-wrapper",
//         start: 'top 53%',
//         end: 'bottom 47%',
//         ease: "power4.inOut",
//         markers: true,
//         toggleActions: "play reverse play reverse",
//         // toggleClass: "active",
//     }
// });
