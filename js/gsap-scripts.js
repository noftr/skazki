
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
    // toggleClass: "active",
});

function onEnterFunc1() {
    gsap.to('.main-3s__text-container-1',{
        color: "#FFEE50",
        duration: .5,
        ease: "power3.inOut",
    });
};

function onLeaveFunc1() {
    gsap.to('.main-3s__text-container-1',{
        color: "#FFFFFF",
        duration: .5,
        ease: "power3.inOut",
    });
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
