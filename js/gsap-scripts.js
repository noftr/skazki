// ScrollTrigger.create({
//     trigger: '.main-3s__trigger-1',
//     // animation: animationCard,
//     scroller: ".scroll-wrapper",
//     start: 'top 53%',
//     end: 'bottom 47%',
//     markers: true,
//     // toggleActions: "play reverse play reverse",
//     onEnter: onEnterFunc1,
//     onEnterBack: onEnterFuncBack1,
//     onLeave: onLeaveFunc1,
//     onLeaveBack: onLeaveFuncBack1,
// });

// function onEnterFunc1() {
    gsap.to('.main-3s__text-container-1',{color: "#FFEE50", duration: .4, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "play none none none",
    },});
    gsap.to('.main-3s__number-1',{opacity: 1, delay: .1, duration: .3, ease: "power3.out",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "play none none none",
    },});
    gsap.fromTo(".main-3s__icon-1", {xPercent: 0}, {xPercent: 100, duration: .6, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "play none none none",
    },});
    gsap.fromTo(".main-3s__head-wrapper-1", {yPercent: 0}, {yPercent: -100, duration: 1, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "play none none none",
    },});
// };

// function onLeaveFunc1() {
    gsap.to('.main-3s__text-container-1',{color: "#FFFFFF", duration: .4, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none play none none",
    },});
    gsap.to('.main-3s__number-1',{opacity: 0, delay: .1, duration: .3, ease: "power3.out",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none play none none",
    },});
    gsap.fromTo(".main-3s__icon-1", {xPercent: 0}, {xPercent: 100, duration: .6, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none play none none",
    },});
    gsap.fromTo(".main-3s__head-wrapper-1", {yPercent: 0}, {yPercent: -100, duration: 1, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none play none none",
    },});
// };

// function onEnterFuncBack1() {
    gsap.to('.main-3s__text-container-1',{color: "#FFEE50", duration: .4, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none play none",
    },});
    gsap.to('.main-3s__number-1',{opacity: 1, delay: .1, duration: .3, ease: "power3.out",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none play none",
    },});
    gsap.to(".main-3s__icon-1", {xPercent: 100, duration: .6, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none play none",
    },});
// };

// function onLeaveFuncBack1() {
    gsap.to('.main-3s__text-container-1',{color: "#FFFFFF", duration: .4, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none none play",
    },});
    gsap.to('.main-3s__number-1',{opacity: 0, delay: .1, duration: .3, ease: "power3.out",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none none play",
    },});
    gsap.to(".main-3s__icon-1", {xPercent: 200, duration: .6, ease: "power3.inOut",
    scrollTrigger: {
        trigger: '.main-3s__trigger-1',
        scroller: ".scroll-wrapper",
        start: 'top 53%',
        end: 'bottom 47%',
        markers: true,
        toggleActions: "none none none play",
    },});
// };
