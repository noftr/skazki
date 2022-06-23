let textContainer, trigger, number, icon, headContainer, headWrapper, iconWrapper


const food = ["1", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]

food.forEach((item, index) => {

    textContainer = document.querySelectorAll('.main-3s__text-container')[index];
    trigger = document.querySelectorAll('.main-3s__trigger')[index];
    number = document.querySelectorAll('.main-3s__number')[index];
    icon = document.querySelectorAll('.main-3s__icon')[index];
    iconWrapper = document.querySelectorAll('.main-3s__icon-wrapper')[index];
    headContainer = document.querySelectorAll('.main-3s__head-container')[index];
    headWrapper = document.querySelectorAll('.main-3s__head-wrapper')[index];

    // on enter
    gsap.to(textContainer,{color: "#FFEE50", duration: .6, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        markers: true,
        toggleActions: "restart none restart none",
    },});
    gsap.to(number,{opacity: 1, duration: .6, ease: "power2.out",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reset play reset",
    },});
    gsap.to(number,{color: "#FFEE50", delay: .3, duration: .6, ease: "power2.out",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "restart none restart none",
    },});
    gsap.to(icon, {xPercent: 100, duration: .6, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "restart none restart none",
    },});
    gsap.to(headContainer, {yPercent: -100, duration: 1, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "restart none restart none",
    },});

    // on leave
    gsap.to(textContainer,{color: "#FFFFFF", duration: .6, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "reset play reset play",
    },});
    gsap.to(number,{opacity: 0, duration: .6, ease: "power2.out",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "reset play reset play",
    },});
    gsap.to(number,{color: "#FFFFFF", delay: .3, duration: .6, ease: "power2.out",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "reset play reset play",
    },});
    gsap.to(iconWrapper,{xPercent: 100, duration: .6, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "reset play reset play",
    },});
    gsap.to(headWrapper, {yPercent: -100, duration: 1, ease: "power2.inOut",
    scrollTrigger: {
        trigger: trigger,
        scroller: ".scroll-wrapper",
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "none restart none restart",
    },});

})
