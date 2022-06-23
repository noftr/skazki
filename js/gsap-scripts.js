let textContainer, trigger, number, icon, heading

// надо поставить переменную и куери селектор для каждого класса
textContainer = document.querySelectorAll('.main-3s__text-container')[0];
trigger = document.querySelectorAll('.main-3s__trigger')[0];
number = document.querySelectorAll('.main-3s__number')[0];
icon = document.querySelectorAll('.main-3s__icon')[0];
heading = document.querySelectorAll('.main-3s__head-wrapper')[0];

// on enter
gsap.to(textContainer,{color: "#FFEE50", duration: .4, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset reset reset",
},});
gsap.to(number,{opacity: 1, delay: .1, duration: .3, ease: "power3.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset reset reset",
},});
gsap.fromTo(icon, {xPercent: 0}, {xPercent: 100, duration: .6, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset reset reset",
},});
gsap.fromTo(heading, {yPercent: 0}, {yPercent: -100, duration: 1, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset reset reset",
},});

// on leave
gsap.to(textContainer,{color: "#FFFFFF", duration: .4, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset reset",
},});
gsap.to(number,{opacity: 0, delay: .1, duration: .3, ease: "power3.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset reset",
},});
gsap.to(icon, {xPercent: 100, duration: .6, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset reset",
},});
gsap.fromTo(heading, {yPercent: 0}, {yPercent: -100, duration: 1, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset reset",
},});

// on enter back
gsap.to(textContainer,{color: "#FFEE50", duration: .4, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset play reset",
},});
gsap.to(number,{opacity: 1, delay: .1, duration: .3, ease: "power3.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset play reset",
},});
gsap.to(icon, {xPercent: 100, duration: .6, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset play reset",
},});

// on leave back
gsap.to(textContainer,{color: "#FFFFFF", duration: .4, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset reset play",
},});
gsap.to(number,{opacity: 0, delay: .1, duration: .3, ease: "power3.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset reset play",
},});
gsap.to(icon, {xPercent: 200, duration: .6, ease: "power3.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset reset reset play",
},});
