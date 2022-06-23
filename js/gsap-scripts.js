let textContainer, trigger, number, icon, heading

let countCycle
let numCycle = 0;

textContainer = document.querySelectorAll('.main-3s__text-container')[numCycle];
trigger = document.querySelectorAll('.main-3s__trigger')[numCycle];
number = document.querySelectorAll('.main-3s__number')[numCycle];
iconWrapper = document.querySelectorAll('.main-3s__icon-wrapper')[numCycle];
icon = document.querySelectorAll('.main-3s__icon')[numCycle];
headWrapper = document.querySelectorAll('.main-3s__head-wrapper')[numCycle];
headContainer = document.querySelectorAll('.main-3s__head-container')[numCycle];

// on enter
gsap.to(textContainer,{color: "#FFEE50", duration: .6, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});
gsap.to(number,{opacity: 1, duration: .6, ease: "power2.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});
gsap.to(number,{color: "#FFEE50", delay: .3, duration: .6, ease: "power2.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});
gsap.to(icon, {xPercent: 200, duration: .6, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset play play",
},});
gsap.to(headContainer, {yPercent: -100, duration: 1, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset play reset",
},});


// on leave
gsap.to(textContainer,{color: "#FFFFFF", duration: .6, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
gsap.to(number,{opacity: 0, duration: .6, ease: "power2.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
gsap.to(number,{color: "#FFFFFF", delay: .3, duration: .6, ease: "power2.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
gsap.to(icon, {xPercent: 200, duration: .6, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
gsap.to(headContainer, {yPercent: -200, duration: 1, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
