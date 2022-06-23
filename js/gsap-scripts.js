let textContainer, trigger, number, icon, heading

// надо поставить переменную и куери селектор для каждого класса
textContainer = document.querySelectorAll('.main-3s__text-container')[0];
trigger = document.querySelectorAll('.main-3s__trigger')[0];
number = document.querySelectorAll('.main-3s__number')[0];
iconWrapper = document.querySelectorAll('.main-3s__icon-wrapper')[0];
icon = document.querySelectorAll('.main-3s__icon')[0];
headWrapper = document.querySelectorAll('.main-3s__head-wrapper')[0];
headContainer = document.querySelectorAll('.main-3s__head-container')[0];

// on enter
gsap.to(textContainer,{color: "#FFEE50", duration: .4, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "play reset play reset",
},});
gsap.to(number,{opacity: 1, delay: .2, duration: .7, ease: "power2.out",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});
gsap.to(iconWrapper,{xPercent: 100, duration: .6, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});
gsap.to(headWrapper,{yPercent: -100, duration: 1, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "restart none restart none",
},});

// on leave
gsap.to(textContainer,{color: "#FFFFFF", duration: .4, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
gsap.to(number,{opacity: 0, delay: .2, duration: .7, ease: "power2.out",
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
gsap.to(headContainer, {yPercent: -100, duration: 1, ease: "power2.inOut",
scrollTrigger: {
    trigger: trigger,
    scroller: ".scroll-wrapper",
    start: 'top 53%',
    end: 'bottom 47%',
    markers: true,
    toggleActions: "reset play reset play",
},});
